import SdkEnvironment from '../managers/SdkEnvironment';
export default class CookieSyncer {
    constructor(context, isFeatureEnabled = false) {
        this.context = context;
        this.isFeatureEnabled = isFeatureEnabled;
    }
    get PUBLISHER_ID() {
        const defaultId = "os!os";
        try {
            const appId = this.context.appConfig.appId;
            const truncatedAppId = appId.replace(/-/g, '').substr(0, 15).toLowerCase();
            return `os!${truncatedAppId}`;
        }
        catch (e) {
            return defaultId;
        }
    }
    getFrameOrigin() {
        const isUsingHttp = !!this.context.appConfig.subdomain;
        if (isUsingHttp) {
            return new URL(`https://${this.context.appConfig.subdomain}.os.tc`);
        }
        else {
            return new URL(SdkEnvironment.getOneSignalApiUrl().origin);
        }
    }
    async install() {
        // Only process for top frames */
        if (window.top !== window)
            return;
        const frameUrl = this.getFrameOrigin();
        if (this.isFeatureEnabled) {
            frameUrl.pathname = '/webPushAnalytics';
            frameUrl.search = `sync=true&appId=${this.PUBLISHER_ID}`;
        }
        else {
            frameUrl.pathname = "/webPushAnalytics";
        }
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = frameUrl.href;
        const loadPromise = {
            promise: undefined,
            resolver: undefined,
            rejector: undefined,
        };
        loadPromise.promise = new Promise((resolve, reject) => {
            loadPromise.resolver = resolve;
            loadPromise.rejector = reject;
        });
        document.body.appendChild(iframe);
        iframe.onload = loadPromise.resolver;
        iframe.onerror = loadPromise.rejector;
        return loadPromise.promise;
    }
}
//# sourceMappingURL=CookieSyncer.js.map