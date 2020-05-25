import React from "react"
import oneline from "oneline"

export const onRenderBody = ({ setPostBodyComponents }, { key }) => {
  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: oneline`
        (function(){
          window.ldfdr = window.ldfdr || {};
          (function(d, s, ss, fs){
            fs = d.getElementsByTagName(s)[0];
            function ce(src){
              var cs  = d.createElement(s);
              cs.src = src;
              setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1);
            }
            ce(ss);
          })(document, 'script', 'https://sc.lfeeder.com/lftracker_${key}.js');
        })();`,
      }}
    />,
  ])
}
