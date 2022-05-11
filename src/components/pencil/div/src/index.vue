<template>
  <div ref="host" class="pencil_host pencil_div">
    <slot></slot>
  </div>
</template>
<script>
import { render } from '../../_util/util';
import "../../_style/index.less";
import { onMounted, reactive, ref } from 'vue';
export default {
  name: 'pencil-div',
  props:{
    elevation: { type: [Number, String], default: 0 },
  },
  setup(props, ctx) {
    let hostMap=null
    let host=ref(null)
    onMounted(()=>{
      hostMap = new render(host.value)
      hostMap.setSvgStyle({
        hachureGap: 1,
        fill:"rgba(0,0,0,0)"
      })
      hostMap.on("watchHost", (rough) => {
        elevation(rough);
      });
    })
    function elevation(rough) {
      var elev = props.elevation;
      const rc = rough.svg(hostMap.svg);
      hostMap.svg.setAttributeNS(null, "width", hostMap.s.width + elev * 2);
      hostMap.svg.setAttributeNS(null, "height", hostMap.s.height + elev * 2);
      for (var i = 0; i <= elev; i++) {
        if (elev === 0) return;
        var elevation = rc.linearPath(
          [
            [hostMap.s.width + i * 2, 0 + i * 2],
            [hostMap.s.width + i * 2, hostMap.s.height + i * 2],
            [hostMap.s.width + i * 2, hostMap.s.height + i * 2],
            [0 + i * 2, hostMap.s.height + i * 2],
          ],
          {
            bowing: 2, //弯曲
            stroke: hostMap.decoration.stroke,
          }
        );
        elevation.style.opacity = 1 - i * 0.12;
        hostMap.svg.appendChild(elevation);
      }
    }
    return {host}
  }
}
</script>

<style lang="less">
// .pencil_div{
//   padding: 20px;
// }
</style>