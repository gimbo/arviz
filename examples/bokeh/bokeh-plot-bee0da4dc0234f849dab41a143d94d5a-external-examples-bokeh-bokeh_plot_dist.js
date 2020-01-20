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
      };var element = document.getElementById("c3dd21fb-cc20-4d6d-8529-b25cead3f5d8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c3dd21fb-cc20-4d6d-8529-b25cead3f5d8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c82f25c9-f847-43d2-ae85-38ab08fef47f":{"roots":{"references":[{"attributes":{},"id":"96072","type":"PanTool"},{"attributes":{"callback":null},"id":"96024","type":"DataRange1d"},{"attributes":{"overlay":{"id":"96096","type":"BoxAnnotation"}},"id":"96042","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"96021","subtype":"Figure","type":"Plot"},{"id":"96053","subtype":"Figure","type":"Plot"}]},"id":"96113","type":"Row"},{"attributes":{"items":[{"id":"96098","type":"LegendItem"}]},"id":"96097","type":"Legend"},{"attributes":{},"id":"96045","type":"HelpTool"},{"attributes":{"source":{"id":"96099","type":"ColumnDataSource"}},"id":"96103","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"96068","type":"BasicTicker"}},"id":"96071","type":"Grid"},{"attributes":{"formatter":{"id":"96106","type":"BasicTickFormatter"},"ticker":{"id":"96068","type":"BasicTicker"}},"id":"96067","type":"LinearAxis"},{"attributes":{"data_source":{"id":"96099","type":"ColumnDataSource"},"glyph":{"id":"96100","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96101","type":"Line"},"selection_glyph":null,"view":{"id":"96103","type":"CDSView"}},"id":"96102","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"96104","type":"Title"},{"attributes":{},"id":"96129","type":"UnionRenderers"},{"attributes":{},"id":"96040","type":"PanTool"},{"attributes":{"callback":null},"id":"96022","type":"DataRange1d"},{"attributes":{},"id":"96060","type":"LinearScale"},{"attributes":{},"id":"96094","type":"BasicTickFormatter"},{"attributes":{},"id":"96041","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"96130","type":"Selection"},"selection_policy":{"id":"96129","type":"UnionRenderers"}},"id":"96099","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96040","type":"PanTool"},{"id":"96041","type":"WheelZoomTool"},{"id":"96042","type":"BoxZoomTool"},{"id":"96043","type":"SaveTool"},{"id":"96044","type":"ResetTool"},{"id":"96045","type":"HelpTool"}]},"id":"96046","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96096","type":"BoxAnnotation"},{"attributes":{},"id":"96058","type":"LinearScale"},{"attributes":{},"id":"96127","type":"Selection"},{"attributes":{"overlay":{"id":"96110","type":"BoxAnnotation"}},"id":"96074","type":"BoxZoomTool"},{"attributes":{},"id":"96126","type":"UnionRenderers"},{"attributes":{},"id":"96063","type":"BasicTicker"},{"attributes":{"callback":null},"id":"96054","type":"DataRange1d"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"96100","type":"Line"},{"attributes":{},"id":"96073","type":"WheelZoomTool"},{"attributes":{},"id":"96130","type":"Selection"},{"attributes":{"formatter":{"id":"96092","type":"BasicTickFormatter"},"ticker":{"id":"96036","type":"BasicTicker"}},"id":"96035","type":"LinearAxis"},{"attributes":{},"id":"96092","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96072","type":"PanTool"},{"id":"96073","type":"WheelZoomTool"},{"id":"96074","type":"BoxZoomTool"},{"id":"96075","type":"SaveTool"},{"id":"96076","type":"ResetTool"},{"id":"96077","type":"HelpTool"}]},"id":"96078","type":"Toolbar"},{"attributes":{"formatter":{"id":"96108","type":"BasicTickFormatter"},"ticker":{"id":"96063","type":"BasicTicker"}},"id":"96062","type":"LinearAxis"},{"attributes":{},"id":"96075","type":"SaveTool"},{"attributes":{"formatter":{"id":"96094","type":"BasicTickFormatter"},"ticker":{"id":"96031","type":"BasicTicker"}},"id":"96030","type":"LinearAxis"},{"attributes":{"source":{"id":"96085","type":"ColumnDataSource"}},"id":"96089","type":"CDSView"},{"attributes":{},"id":"96044","type":"ResetTool"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"96087","type":"Quad"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],"top":{"__ndarray__":"O99PjZdukj9Ei2zn+6mxP4ts5/up8cI/LbKd76fGyz/2KFyPwvXIP5huEoPAysE/2c73U+Oluz9oke18PzWuP5qZmZmZmZk//Knx0k1ikD/8qfHSTWJwPwAAAAAAAAAA/Knx0k1iUD/8qfHSTWJQPw==","dtype":"float64","shape":[14]}},"selected":{"id":"96127","type":"Selection"},"selection_policy":{"id":"96126","type":"UnionRenderers"}},"id":"96085","type":"ColumnDataSource"},{"attributes":{},"id":"96077","type":"HelpTool"},{"attributes":{"ticker":{"id":"96031","type":"BasicTicker"}},"id":"96034","type":"Grid"},{"attributes":{},"id":"96076","type":"ResetTool"},{"attributes":{"text":""},"id":"96090","type":"Title"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"96086","type":"Quad"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"96088","type":"GlyphRenderer"}]},"id":"96098","type":"LegendItem"},{"attributes":{},"id":"96108","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"96030","type":"LinearAxis"}],"center":[{"id":"96034","type":"Grid"},{"id":"96039","type":"Grid"},{"id":"96097","type":"Legend"}],"left":[{"id":"96035","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"96088","type":"GlyphRenderer"}],"title":{"id":"96090","type":"Title"},"toolbar":{"id":"96046","type":"Toolbar"},"x_range":{"id":"96022","type":"DataRange1d"},"x_scale":{"id":"96026","type":"LinearScale"},"y_range":{"id":"96024","type":"DataRange1d"},"y_scale":{"id":"96028","type":"LinearScale"}},"id":"96021","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"96085","type":"ColumnDataSource"},"glyph":{"id":"96086","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96087","type":"Quad"},"selection_glyph":null,"view":{"id":"96089","type":"CDSView"}},"id":"96088","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"96036","type":"BasicTicker"}},"id":"96039","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96101","type":"Line"},{"attributes":{"items":[{"id":"96112","type":"LegendItem"}]},"id":"96111","type":"Legend"},{"attributes":{"label":{"value":"Gaussian"},"renderers":[{"id":"96102","type":"GlyphRenderer"}]},"id":"96112","type":"LegendItem"},{"attributes":{},"id":"96031","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96110","type":"BoxAnnotation"},{"attributes":{},"id":"96043","type":"SaveTool"},{"attributes":{},"id":"96106","type":"BasicTickFormatter"},{"attributes":{},"id":"96068","type":"BasicTicker"},{"attributes":{},"id":"96036","type":"BasicTicker"},{"attributes":{},"id":"96026","type":"LinearScale"},{"attributes":{"below":[{"id":"96062","type":"LinearAxis"}],"center":[{"id":"96066","type":"Grid"},{"id":"96071","type":"Grid"},{"id":"96111","type":"Legend"}],"left":[{"id":"96067","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"96102","type":"GlyphRenderer"}],"title":{"id":"96104","type":"Title"},"toolbar":{"id":"96078","type":"Toolbar"},"x_range":{"id":"96054","type":"DataRange1d"},"x_scale":{"id":"96058","type":"LinearScale"},"y_range":{"id":"96056","type":"DataRange1d"},"y_scale":{"id":"96060","type":"LinearScale"}},"id":"96053","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"96063","type":"BasicTicker"}},"id":"96066","type":"Grid"},{"attributes":{"callback":null},"id":"96056","type":"DataRange1d"},{"attributes":{},"id":"96028","type":"LinearScale"}],"root_ids":["96113"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"c82f25c9-f847-43d2-ae85-38ab08fef47f","roots":{"96113":"c3dd21fb-cc20-4d6d-8529-b25cead3f5d8"}}];
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