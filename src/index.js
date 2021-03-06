import {PLATFORM} from 'aurelia-pal';

export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./elements/range.html'),
    PLATFORM.moduleName('./elements/receptacle.html'),
    PLATFORM.moduleName('./elements/bind2previous'),
    PLATFORM.moduleName('./elements/dygraphchart'),
    PLATFORM.moduleName('./elements/beaker.html'),
    PLATFORM.moduleName('./elements/value'),
    PLATFORM.moduleName('./elements/beakercontrols.html'),
    PLATFORM.moduleName('./elements/markdown'),
    PLATFORM.moduleName('./elements/markdownaurelia'),
    PLATFORM.moduleName('./elements/markdown-input'),
    PLATFORM.moduleName('./elements/markdownnav'),
    PLATFORM.moduleName('./elements/simplegif'),
    PLATFORM.moduleName('./elements/ecg'),
    PLATFORM.moduleName('./elements/chartjs'),
    PLATFORM.moduleName('./elements/chartjs-time'),
    PLATFORM.moduleName('./elements/chartjs-xy'),
    PLATFORM.moduleName('./elements/animate-gif'),
    PLATFORM.moduleName('./elements/animate-sync-gif'),
    PLATFORM.moduleName('./elements/animate-control'),
    PLATFORM.moduleName('./elements/animate-adobe'),
    PLATFORM.moduleName('./elements/animate-adobe-control'),
    PLATFORM.moduleName('./elements/bind2a'),
    PLATFORM.moduleName('./elements/quiz'),
    PLATFORM.moduleName('./elements/audio-on-increase'),
    PLATFORM.moduleName('./elements/audio-on-decrease'),
    PLATFORM.moduleName('./elements/sound-on-increase'),
    PLATFORM.moduleName('./elements/markdown-book'),
    PLATFORM.moduleName('./elements/markdown-book-au'),
    PLATFORM.moduleName('./elements/markdown-app.html'),
    PLATFORM.moduleName('./elements/fmi')
  ]);
}
