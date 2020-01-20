(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("50425c3b-28d8-42f0-a413-abcd0b879d60");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '50425c3b-28d8-42f0-a413-abcd0b879d60' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"c257a76c-7b86-4c5f-bb62-201bc59ceafd":{"roots":{"references":[{"attributes":{"callback":null},"id":"97618","type":"DataRange1d"},{"attributes":{},"id":"97632","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"97632","type":"BasicTicker"}},"id":"97635","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"97674","type":"Selection"},"selection_policy":{"id":"97673","type":"UnionRenderers"}},"id":"97657","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"97659","type":"Patch"},{"attributes":{"ticker":{"id":"97627","type":"BasicTicker"}},"id":"97630","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97664","type":"Line"},{"attributes":{},"id":"97671","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"97658","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97677","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"97667","type":"Title"},{"attributes":{"data_source":{"id":"97657","type":"ColumnDataSource"},"glyph":{"id":"97658","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97659","type":"Patch"},"selection_glyph":null,"view":{"id":"97661","type":"CDSView"}},"id":"97660","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"97645","type":"HoverTool"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97663","type":"Line"},{"attributes":{},"id":"97669","type":"BasicTickFormatter"},{"attributes":{},"id":"97676","type":"Selection"},{"attributes":{},"id":"97638","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"97620","type":"DataRange1d"},{"attributes":{"formatter":{"id":"97671","type":"BasicTickFormatter"},"ticker":{"id":"97627","type":"BasicTicker"}},"id":"97626","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"97636","type":"PanTool"},{"id":"97637","type":"BoxZoomTool"},{"id":"97638","type":"WheelZoomTool"},{"id":"97639","type":"BoxSelectTool"},{"id":"97640","type":"LassoSelectTool"},{"id":"97641","type":"UndoTool"},{"id":"97642","type":"RedoTool"},{"id":"97643","type":"ResetTool"},{"id":"97644","type":"SaveTool"},{"id":"97645","type":"HoverTool"}]},"id":"97646","type":"Toolbar"},{"attributes":{},"id":"97673","type":"UnionRenderers"},{"attributes":{},"id":"97627","type":"BasicTicker"},{"attributes":{"source":{"id":"97662","type":"ColumnDataSource"}},"id":"97666","type":"CDSView"},{"attributes":{},"id":"97636","type":"PanTool"},{"attributes":{"data_source":{"id":"97662","type":"ColumnDataSource"},"glyph":{"id":"97663","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97664","type":"Line"},"selection_glyph":null,"view":{"id":"97666","type":"CDSView"}},"id":"97665","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"eGj3toSwAcC2b0AFg/b+v/Pv1x/mpv2/S+wEv6Ya+7+bmIqhgKX6v51Vqp3va/q/rz6oe2Us+b+jjSPgzKr4v5vMmoe1sPe/nQjruVHI9b98BZi/zXP1v4v4W9EEBvO/Jl1WC9ay8r/wxYNOkFTyv6eAF5cgJfK/TmQKZX5x8L/7WEyKXD3wv9HHlkfPCPC/8MQk/Oid679UdWgj7xPrv8atyznNtOe/fnkK6VA847+mqFYwtM/iv4f8/NEsyOG/quAQB6P8378ogqbEAWzfv/Ig3nkXFNy/YZwbwIjr2793+u1EjIzavzDg9VsN6NS/Iygaaz3S1L/stw5v5vnTv2su3lME+9C/K7sFO/bF0L9fbuZsKbbPv7z4Dg/LMc2/rALKdeu/zL9uTMGiTzXMv17xP/vPv8i/VwxpS1F8xr+eka0SN8TFv3NAXFcNO8O/Fj2qZ3r8wb8oQpZUknHAv2myY3ThRr2/hj1EIVpIqL/JK6XSeq+kvxxfuZpHIZy/l4Y3CY17vj9c8qrzuw3AP2NoGJhRnMI/q1qrSNj5yT8ijKd7kFHLP7w5dZA+4ss/O8QG0Yo7zT92HFbHnYzPP7BQkLhEGtI/2G6TOXUB0z/tsIOiCbjVP1uYD9CNItc/TmioqOlv2D/mV6AHar7YP49hm4lyPtk/3E1/nGlA2T8jlL+nDqvZP0bOx/r0G+A/9i+we8sC4T+mNqS+dlLiP93wWb5Rd+M/LgXRmF2c5D9y3cOwcTzmPxTs6ZV8Tec/ce5r1ZnZ5z8IDxeQOBLoP7Y7gr4J7uo/7qFIaI8a7T/+W3yzl07wPzp5uO4J5PA/GS+2MGMb8T+A9rCTTEXxP2NCrmNiffI/UC7m2ZZz8z8gokoBENjzP9mY757f4PQ/vWuRjZ7w9T9FN4SpxUf2PwDkNC1khvY/XroqyqxI9z9uhJOSGg34Pzdrg8DZU/g/QqT7yQKk+D+aujHiSXH5PxNmTxk8Sfo/6E8o801w+z8aFrKTzBL8P41ph1nhuPw/Msj8CzPq/D95tD/QPxj+PxNXHfd01QJAgpnWx7pEBkA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"EC8Rkvae7D8lyF99voTwPwYIFPCMLPE/2ol9oKxy8j+yszqvP63yPzLVKjEIyvI/qOArQs1p8z8uOe6PmarzP7KZMjylJ/Q/snsKI9cb9T9C/TMgGUb1P7oDUpf9fPY/bdFU+pSm9j8IHb7Yt9X2P6w/dLRv7fY/2c16zUDH9z+C09m6UeH3PxicNFyY+/c/xM72wIUY+T+r4iU3BDv5P44UjbHMEvo/oGG9xesw+z/WVerzEkz7P97AgMv0jfs/6+Mdn2sA/D+7L2vHfxL8P+I7xBB9ffw/dIz8546C/D+xQGJ3bq78P/pDgVT+Yv0//LqcUrhl/T8CKR4yw4D9PzM6hHWf4P0/m0ifOEHn/T8amTFpnQT+P3QQD0/jLP4/1V+jSAE0/j8569MFqzz+P+oATAADdP4/O29J6zqY/j/mJtWOvKP+P/k7iipPzP4/L1yFWTjg/j/em7ba5vj+P23iXPTIFf8/Cu96l96e/z9Ra7UUQq3/P0KNynC9x/8/Gt4kNO55AECTV53fbYAAQEPDwIzilABA1VpFws7PAEBhPN2DjNoAQM6pg/QR3wBAIjaIVtzpAEDksDruZPwAQAsFiUukIQFA7jaZUxcwAUAPOyiagFsBQIb5AN0ocgFAhYaKmv6GAUB+BXqg5osBQBm2mSjnkwFA3vTHmQaUAUBC+XvqsJoBQMn5WJ9+AwJA/wV2b1kgAkDVhtTXTkoCQBw+yzfqbgJApiAas4uTAkCuexg2jscCQII9vZKv6QJAzn2tOjP7AkDh4QISRwIDQHdH0DfBXQNAPhQJ7VGjA0AAF9/spRMEQE4ernsCOQRAxostzNhGBECgPewkU1EEQJmQ65hYnwRAlIt5tuXcBECIqFIABPYEQDbmu+c3OAVA71pkoyd8BUDRDWFq8ZEFQAA5TQuZoQVAmK6KMivSBUAc4aSkRgMGQM7aIHD2FAZAEOl+sgApBkCmbox4UlwGQIXZUwZPkgZA+hPKfBPcBkCGhewkswQHQGPaYVY4LgdADDL/wow6B0Ae7Q/0D4YHQIqrjnu6aglAwUzrY10iC0A=","dtype":"float64","shape":[100]}},"selected":{"id":"97676","type":"Selection"},"selection_policy":{"id":"97675","type":"UnionRenderers"}},"id":"97662","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"97626","type":"LinearAxis"}],"center":[{"id":"97630","type":"Grid"},{"id":"97635","type":"Grid"}],"left":[{"id":"97631","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"97660","type":"GlyphRenderer"},{"id":"97665","type":"GlyphRenderer"}],"title":{"id":"97667","type":"Title"},"toolbar":{"id":"97646","type":"Toolbar"},"x_range":{"id":"97618","type":"DataRange1d"},"x_scale":{"id":"97622","type":"LinearScale"},"y_range":{"id":"97620","type":"DataRange1d"},"y_scale":{"id":"97624","type":"LinearScale"}},"id":"97617","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"97657","type":"ColumnDataSource"}},"id":"97661","type":"CDSView"},{"attributes":{},"id":"97622","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"97679","type":"PolyAnnotation"}},"id":"97640","type":"LassoSelectTool"},{"attributes":{},"id":"97642","type":"RedoTool"},{"attributes":{},"id":"97643","type":"ResetTool"},{"attributes":{},"id":"97644","type":"SaveTool"},{"attributes":{},"id":"97641","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"97678","type":"BoxAnnotation"}},"id":"97639","type":"BoxSelectTool"},{"attributes":{"overlay":{"id":"97677","type":"BoxAnnotation"}},"id":"97637","type":"BoxZoomTool"},{"attributes":{},"id":"97675","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97678","type":"BoxAnnotation"},{"attributes":{},"id":"97674","type":"Selection"},{"attributes":{},"id":"97624","type":"LinearScale"},{"attributes":{"formatter":{"id":"97669","type":"BasicTickFormatter"},"ticker":{"id":"97632","type":"BasicTicker"}},"id":"97631","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"97679","type":"PolyAnnotation"}],"root_ids":["97617"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"c257a76c-7b86-4c5f-bb62-201bc59ceafd","roots":{"97617":"50425c3b-28d8-42f0-a413-abcd0b879d60"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();