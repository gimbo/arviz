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
      };var element = document.getElementById("e2540c48-fe13-4a33-880e-73a2ac4b045f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e2540c48-fe13-4a33-880e-73a2ac4b045f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"904c2542-183d-4351-a9ee-6beb2844bd3a":{"roots":{"references":[{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"96728","type":"BasicTickFormatter"},"ticker":{"id":"96689","type":"BasicTicker"}},"id":"96688","type":"LinearAxis"},{"attributes":{},"id":"96734","type":"UnionRenderers"},{"attributes":{},"id":"96730","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"96738","type":"PolyAnnotation"}},"id":"96697","type":"LassoSelectTool"},{"attributes":{"dimension":1,"ticker":{"id":"96689","type":"BasicTicker"}},"id":"96692","type":"Grid"},{"attributes":{"children":[[{"id":"96674","subtype":"Figure","type":"Plot"},0,0]]},"id":"96740","type":"GridBox"},{"attributes":{},"id":"96735","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"96737","type":"BoxAnnotation"}},"id":"96696","type":"BoxSelectTool"},{"attributes":{},"id":"96679","type":"LinearScale"},{"attributes":{"toolbar":{"id":"96741","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96742","type":"ToolbarBox"},{"attributes":{},"id":"96733","type":"Selection"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96724","type":"Span"},{"attributes":{},"id":"96701","type":"SaveTool"},{"attributes":{"children":[{"id":"96742","type":"ToolbarBox"},{"id":"96740","type":"GridBox"}]},"id":"96743","type":"Column"},{"attributes":{"callback":null},"id":"96677","type":"DataRange1d"},{"attributes":{"data_source":{"id":"96714","type":"ColumnDataSource"},"glyph":{"id":"96715","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96716","type":"Circle"},"selection_glyph":null,"view":{"id":"96718","type":"CDSView"}},"id":"96717","type":"GlyphRenderer"},{"attributes":{},"id":"96728","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96737","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","shape":[2]}},"selected":{"id":"96735","type":"Selection"},"selection_policy":{"id":"96734","type":"UnionRenderers"}},"id":"96720","type":"ColumnDataSource"},{"attributes":{},"id":"96699","type":"RedoTool"},{"attributes":{"below":[{"id":"96683","type":"LinearAxis"}],"center":[{"id":"96687","type":"Grid"},{"id":"96692","type":"Grid"}],"left":[{"id":"96688","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96717","type":"GlyphRenderer"},{"id":"96721","type":"GlyphRenderer"},{"id":"96723","type":"Span"},{"id":"96724","type":"Span"}],"title":{"id":"96725","type":"Title"},"toolbar":{"id":"96703","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96675","type":"DataRange1d"},"x_scale":{"id":"96679","type":"LinearScale"},"y_range":{"id":"96677","type":"DataRange1d"},"y_scale":{"id":"96681","type":"LinearScale"}},"id":"96674","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96693","type":"PanTool"},{"id":"96694","type":"BoxZoomTool"},{"id":"96695","type":"WheelZoomTool"},{"id":"96696","type":"BoxSelectTool"},{"id":"96697","type":"LassoSelectTool"},{"id":"96698","type":"UndoTool"},{"id":"96699","type":"RedoTool"},{"id":"96700","type":"ResetTool"},{"id":"96701","type":"SaveTool"},{"id":"96702","type":"HoverTool"}]},"id":"96703","type":"Toolbar"},{"attributes":{"overlay":{"id":"96736","type":"BoxAnnotation"}},"id":"96694","type":"BoxZoomTool"},{"attributes":{"source":{"id":"96720","type":"ColumnDataSource"}},"id":"96722","type":"CDSView"},{"attributes":{"source":{"id":"96714","type":"ColumnDataSource"}},"id":"96718","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96733","type":"Selection"},"selection_policy":{"id":"96732","type":"UnionRenderers"}},"id":"96714","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"96693","type":"PanTool"},{"id":"96694","type":"BoxZoomTool"},{"id":"96695","type":"WheelZoomTool"},{"id":"96696","type":"BoxSelectTool"},{"id":"96697","type":"LassoSelectTool"},{"id":"96698","type":"UndoTool"},{"id":"96699","type":"RedoTool"},{"id":"96700","type":"ResetTool"},{"id":"96701","type":"SaveTool"},{"id":"96702","type":"HoverTool"}]},"id":"96741","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"96702","type":"HoverTool"},{"attributes":{"ticker":{"id":"96684","type":"BasicTicker"}},"id":"96687","type":"Grid"},{"attributes":{},"id":"96732","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"96675","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96738","type":"PolyAnnotation"},{"attributes":{"text":"mu"},"id":"96725","type":"Title"},{"attributes":{"data_source":{"id":"96720","type":"ColumnDataSource"},"glyph":{"id":"96719","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"96722","type":"CDSView"}},"id":"96721","type":"GlyphRenderer"},{"attributes":{},"id":"96689","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"96723","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"96730","type":"BasicTickFormatter"},"ticker":{"id":"96684","type":"BasicTicker"}},"id":"96683","type":"LinearAxis"},{"attributes":{},"id":"96698","type":"UndoTool"},{"attributes":{},"id":"96700","type":"ResetTool"},{"attributes":{},"id":"96684","type":"BasicTicker"},{"attributes":{},"id":"96693","type":"PanTool"},{"attributes":{},"id":"96681","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96736","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96715","type":"Circle"},{"attributes":{},"id":"96695","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96716","type":"Circle"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"96719","type":"Dash"}],"root_ids":["96743"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"904c2542-183d-4351-a9ee-6beb2844bd3a","roots":{"96743":"e2540c48-fe13-4a33-880e-73a2ac4b045f"}}];
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