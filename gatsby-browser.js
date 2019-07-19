import './src/styles/global.css'

export const onClientEntry = () => {
    var $buoop = {
        required: { e: -2, f: -3, o: -3, s: -3, c: -3 },
        insecure: true,
        api: 2019.07,
    }
    function $buo_f() {
        var e = document.createElement('script')
        e.src = '//browser-update.org/update.min.js'
        document.body.appendChild(e)
    }
    try {
        document.addEventListener('DOMContentLoaded', $buo_f, false)
    } catch (e) {
        window.attachEvent('onload', $buo_f)
    }
}
