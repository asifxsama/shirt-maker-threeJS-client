import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EC6442',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',

});
export default state;