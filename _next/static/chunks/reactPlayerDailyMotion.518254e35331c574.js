(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7596],{6807:function(e,t,r){var a,n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let n of i(t))p.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=s(t,n))||a.enumerable});return e},h=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>f}),e.exports=(a=c,u(o({},"__esModule",{value:!0}),a));var y=((e,t,r)=>(r=null!=e?n(l(e)):{},u(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(7294)),d=r(3807),m=r(1776);class f extends y.Component{constructor(){super(...arguments),h(this,"callPlayer",d.callPlayer),h(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),h(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),h(this,"unmute",(()=>{this.callPlayer("setMuted",!1)})),h(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{controls:t,config:r,onError:a,playing:n}=this.props,[,o]=e.match(m.MATCH_URL_DAILYMOTION);this.player?this.player.load(o,{start:(0,d.parseStartTime)(e),autoplay:n}):(0,d.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(e=>e.player)).then((n=>{if(!this.container)return;const s=n.player;this.player=new s(this.container,{width:"100%",height:"100%",video:o,params:{controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,d.parseStartTime)(e),origin:window.location.origin,...r.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>a(e)}})}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return y.default.createElement("div",{style:t},y.default.createElement("div",{ref:this.ref}))}}h(f,"displayName","DailyMotion"),h(f,"canPlay",m.canPlay.dailymotion),h(f,"loopOnEnded",!0)}}]);