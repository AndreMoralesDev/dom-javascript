const d = document,
         device = navigator.userAgent

const detailsContainer = d.createElement("div");

const userDevice = (container) => {
    const $container = d.getElementById(container);
    const isMobile = {
        android: ()=> device.match(/android/i),
        ios: ()=> device.match(/iphone|ipad|ipod/i),
        windows:()=> device.match(/windows phone/i),
        any: function(){return this.android() || this.ios() || this.windows()}
    }
    const isDesktop = {
        linux: ()=> device.match(/linux/i),
        mac: ()=> device.match(/mac os/i),
        windows: ()=> device.match(/windows nt/i),
        any: function () {return this.linux() || this.mac() || this.windows()}
    }
    const isBrowser = {
        chrome: ()=> device.match(/chrome/i),
        safari: ()=> device.match(/safari/i),
        firefox: ()=> device.match(/firefox/i),
        opera: ()=> device.match(/opera/i),
        ie: ()=> device.match(/msie|iemobile/i),
        edge: ()=> device.match(/edge/i),
        any: function () {
            return this.chrome() || this.safari() 
            || this.firefox() || this.opera() || this.ie() || this.edge()
        }
    }
    const deviceElement = d.createElement("div"),
             browserElement = d.createElement("div"),
             userAgent = d.createElement("div");
    
    deviceElement.textContent = `SO: ${isMobile.any() || isDesktop.any()}`;
    deviceElement.classList.add("device-details")
    detailsContainer.appendChild(deviceElement)
    
    browserElement.textContent = `Navegador: ${isBrowser.any()}`
    browserElement.classList.add("device-details")
    detailsContainer.appendChild(browserElement)

    userAgent.textContent = `User Agent: ${device}`
    userAgent.classList.add("device-details")
    detailsContainer.appendChild(userAgent);

    $container.appendChild(detailsContainer);
}

export default userDevice;