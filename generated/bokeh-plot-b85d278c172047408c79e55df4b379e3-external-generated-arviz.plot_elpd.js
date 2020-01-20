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
      };var element = document.getElementById("4825f0de-b9ce-455f-b043-5041813deb2e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4825f0de-b9ce-455f-b043-5041813deb2e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c2dba98f-9fd2-44f7-83be-ae2c55a6cbfd":{"roots":{"references":[{"attributes":{"text":"centered model - non centered model"},"id":"120042","type":"Title"},{"attributes":{},"id":"120045","type":"BasicTickFormatter"},{"attributes":{},"id":"120004","type":"LinearScale"},{"attributes":{},"id":"120047","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"120039","type":"Cross"},{"attributes":{"formatter":{"id":"120047","type":"BasicTickFormatter"},"ticker":{"id":"120007","type":"BasicTicker"}},"id":"120006","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"120050","type":"Selection"},"selection_policy":{"id":"120049","type":"UnionRenderers"}},"id":"120037","type":"ColumnDataSource"},{"attributes":{},"id":"120049","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"120025","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"120052","type":"BoxAnnotation"}},"id":"120019","type":"BoxSelectTool"},{"attributes":{},"id":"120050","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"120012","type":"BasicTicker"}},"id":"120015","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"120038","type":"Cross"},{"attributes":{},"id":"120018","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"120051","type":"BoxAnnotation"},{"attributes":{},"id":"120016","type":"PanTool"},{"attributes":{"overlay":{"id":"120051","type":"BoxAnnotation"}},"id":"120017","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"120052","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"120000","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"120053","type":"PolyAnnotation"},{"attributes":{},"id":"120002","type":"LinearScale"},{"attributes":{},"id":"120024","type":"SaveTool"},{"attributes":{"ticker":{"id":"120007","type":"BasicTicker"}},"id":"120010","type":"Grid"},{"attributes":{},"id":"120023","type":"ResetTool"},{"attributes":{"data_source":{"id":"120037","type":"ColumnDataSource"},"glyph":{"id":"120038","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"120039","type":"Cross"},"selection_glyph":null,"view":{"id":"120041","type":"CDSView"}},"id":"120040","type":"GlyphRenderer"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"120045","type":"BasicTickFormatter"},"ticker":{"id":"120012","type":"BasicTicker"}},"id":"120011","type":"LinearAxis"},{"attributes":{},"id":"120012","type":"BasicTicker"},{"attributes":{},"id":"120007","type":"BasicTicker"},{"attributes":{},"id":"120021","type":"UndoTool"},{"attributes":{},"id":"120022","type":"RedoTool"},{"attributes":{"callback":null},"id":"119998","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"120016","type":"PanTool"},{"id":"120017","type":"BoxZoomTool"},{"id":"120018","type":"WheelZoomTool"},{"id":"120019","type":"BoxSelectTool"},{"id":"120020","type":"LassoSelectTool"},{"id":"120021","type":"UndoTool"},{"id":"120022","type":"RedoTool"},{"id":"120023","type":"ResetTool"},{"id":"120024","type":"SaveTool"},{"id":"120025","type":"HoverTool"}]},"id":"120026","type":"Toolbar"},{"attributes":{"below":[{"id":"120006","type":"LinearAxis"}],"center":[{"id":"120010","type":"Grid"},{"id":"120015","type":"Grid"}],"left":[{"id":"120011","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"120040","type":"GlyphRenderer"}],"title":{"id":"120042","type":"Title"},"toolbar":{"id":"120026","type":"Toolbar"},"x_range":{"id":"119998","type":"DataRange1d"},"x_scale":{"id":"120002","type":"LinearScale"},"y_range":{"id":"120000","type":"DataRange1d"},"y_scale":{"id":"120004","type":"LinearScale"}},"id":"119997","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"120053","type":"PolyAnnotation"}},"id":"120020","type":"LassoSelectTool"},{"attributes":{"source":{"id":"120037","type":"ColumnDataSource"}},"id":"120041","type":"CDSView"}],"root_ids":["119997"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"c2dba98f-9fd2-44f7-83be-ae2c55a6cbfd","roots":{"119997":"4825f0de-b9ce-455f-b043-5041813deb2e"}}];
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