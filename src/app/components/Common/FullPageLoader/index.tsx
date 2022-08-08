import { useEffect } from "react";
//@ts-expect-error
import MyComponent from "react-fullpage-custom-loader";

const defaultProps = {
  sentences: [],
  loaderType: "ball-clip-rotate",
  // color: "#007ae1",
  color: "#eff1f5",
  fadeIn: true,
  startFadeOut: false,
};

function FullPageLoader(props: $TSFixMe) {
  // const loaderDivRef = useRef(null);

  useEffect(() => {
    if (!props.isLoading) fadeOutEffect();
  }, [props.isLoading]);

  function fadeOutEffect() {
    let loaderDivRef = document.getElementById("loader");
    var fadeEffect = setInterval(function () {
      if (!loaderDivRef?.style.opacity) {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        loaderDivRef.style.opacity = 1;
      }
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      if (loaderDivRef.style.opacity > 0) {
        // loaderDivRef.style.opacity -= 0.1;
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        loaderDivRef.style.opacity -= 0.001;
      } else {
        clearInterval(fadeEffect);
        props.onLoadingDone();
      }
      // }, 100);
    }, 3);
  }

  return (
    <div id="loader">
      <MyComponent {...defaultProps} {...props} />
    </div>
  );
}

export default FullPageLoader;
