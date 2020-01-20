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
      };var element = document.getElementById("ad549927-3662-4736-96dc-47a089dcace4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ad549927-3662-4736-96dc-47a089dcace4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"240e9d8d-6194-4a79-b10f-e7ee9b4e3d1c":{"roots":{"references":[{"attributes":{},"id":"96253","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"96233","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96261","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"96247","type":"Cross"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96260","type":"BoxAnnotation"},{"attributes":{},"id":"96215","type":"BasicTicker"},{"attributes":{},"id":"96232","type":"SaveTool"},{"attributes":{"callback":null},"id":"96206","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96259","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"96245","type":"ColumnDataSource"},"glyph":{"id":"96246","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96247","type":"Cross"},"selection_glyph":null,"view":{"id":"96249","type":"CDSView"}},"id":"96248","type":"GlyphRenderer"},{"attributes":{},"id":"96230","type":"RedoTool"},{"attributes":{"callback":null},"id":"96208","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"96260","type":"BoxAnnotation"}},"id":"96227","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"96261","type":"PolyAnnotation"}},"id":"96228","type":"LassoSelectTool"},{"attributes":{},"id":"96220","type":"BasicTicker"},{"attributes":{"below":[{"id":"96214","type":"LinearAxis"}],"center":[{"id":"96218","type":"Grid"},{"id":"96223","type":"Grid"}],"left":[{"id":"96219","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96248","type":"GlyphRenderer"}],"title":{"id":"96250","type":"Title"},"toolbar":{"id":"96234","type":"Toolbar"},"x_range":{"id":"96206","type":"DataRange1d"},"x_scale":{"id":"96210","type":"LinearScale"},"y_range":{"id":"96208","type":"DataRange1d"},"y_scale":{"id":"96212","type":"LinearScale"}},"id":"96205","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"96258","type":"Selection"},"selection_policy":{"id":"96257","type":"UnionRenderers"}},"id":"96245","type":"ColumnDataSource"},{"attributes":{},"id":"96257","type":"UnionRenderers"},{"attributes":{},"id":"96258","type":"Selection"},{"attributes":{},"id":"96226","type":"WheelZoomTool"},{"attributes":{},"id":"96212","type":"LinearScale"},{"attributes":{},"id":"96231","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"96220","type":"BasicTicker"}},"id":"96223","type":"Grid"},{"attributes":{},"id":"96229","type":"UndoTool"},{"attributes":{},"id":"96224","type":"PanTool"},{"attributes":{"source":{"id":"96245","type":"ColumnDataSource"}},"id":"96249","type":"CDSView"},{"attributes":{"formatter":{"id":"96255","type":"BasicTickFormatter"},"ticker":{"id":"96215","type":"BasicTicker"}},"id":"96214","type":"LinearAxis"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"96253","type":"BasicTickFormatter"},"ticker":{"id":"96220","type":"BasicTicker"}},"id":"96219","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"96246","type":"Cross"},{"attributes":{},"id":"96210","type":"LinearScale"},{"attributes":{},"id":"96255","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96224","type":"PanTool"},{"id":"96225","type":"BoxZoomTool"},{"id":"96226","type":"WheelZoomTool"},{"id":"96227","type":"BoxSelectTool"},{"id":"96228","type":"LassoSelectTool"},{"id":"96229","type":"UndoTool"},{"id":"96230","type":"RedoTool"},{"id":"96231","type":"ResetTool"},{"id":"96232","type":"SaveTool"},{"id":"96233","type":"HoverTool"}]},"id":"96234","type":"Toolbar"},{"attributes":{"overlay":{"id":"96259","type":"BoxAnnotation"}},"id":"96225","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"96215","type":"BasicTicker"}},"id":"96218","type":"Grid"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"96250","type":"Title"}],"root_ids":["96205"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"240e9d8d-6194-4a79-b10f-e7ee9b4e3d1c","roots":{"96205":"ad549927-3662-4736-96dc-47a089dcace4"}}];
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