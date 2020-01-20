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
      };var element = document.getElementById("4ff1d0b0-2fce-4c95-a5c5-8ef92742845b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4ff1d0b0-2fce-4c95-a5c5-8ef92742845b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"68fae652-7346-4954-85a1-baf38f5093fd":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96523","type":"Circle"},{"attributes":{},"id":"96559","type":"Selection"},{"attributes":{"callback":null},"id":"96483","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96565","type":"Circle"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"96548","type":"GlyphRenderer"}]},"id":"96563","type":"LegendItem"},{"attributes":{"data_source":{"id":"96564","type":"ColumnDataSource"},"glyph":{"id":"96565","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96566","type":"Circle"},"selection_glyph":null,"view":{"id":"96568","type":"CDSView"}},"id":"96567","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96584","type":"Selection"},"selection_policy":{"id":"96583","type":"UnionRenderers"}},"id":"96564","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96529","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96524","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"96542","type":"PolyAnnotation"}},"id":"96505","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96539","type":"Selection"},"selection_policy":{"id":"96538","type":"UnionRenderers"}},"id":"96522","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96501","type":"PanTool"},{"id":"96502","type":"BoxZoomTool"},{"id":"96503","type":"WheelZoomTool"},{"id":"96504","type":"BoxSelectTool"},{"id":"96505","type":"LassoSelectTool"},{"id":"96506","type":"UndoTool"},{"id":"96507","type":"RedoTool"},{"id":"96508","type":"ResetTool"},{"id":"96509","type":"SaveTool"},{"id":"96510","type":"HoverTool"}]},"id":"96511","type":"Toolbar"},{"attributes":{"source":{"id":"96564","type":"ColumnDataSource"}},"id":"96568","type":"CDSView"},{"attributes":{},"id":"96507","type":"RedoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96566","type":"Circle"},{"attributes":{},"id":"96489","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96582","type":"Selection"},"selection_policy":{"id":"96581","type":"UnionRenderers"}},"id":"96545","type":"ColumnDataSource"},{"attributes":{},"id":"96509","type":"SaveTool"},{"attributes":{"items":[{"id":"96544","type":"LegendItem"},{"id":"96563","type":"LegendItem"}]},"id":"96543","type":"Legend"},{"attributes":{},"id":"96501","type":"PanTool"},{"attributes":{"callback":null},"id":"96510","type":"HoverTool"},{"attributes":{"dimension":1,"ticker":{"id":"96497","type":"BasicTicker"}},"id":"96500","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96559","type":"Selection"},"selection_policy":{"id":"96558","type":"UnionRenderers"}},"id":"96527","type":"ColumnDataSource"},{"attributes":{},"id":"96581","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96569","type":"Span"},{"attributes":{},"id":"96508","type":"ResetTool"},{"attributes":{},"id":"96487","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96540","type":"BoxAnnotation"},{"attributes":{},"id":"96492","type":"BasicTicker"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"96536","type":"BasicTickFormatter"},"ticker":{"id":"96492","type":"BasicTicker"}},"id":"96491","type":"LinearAxis"},{"attributes":{"text":"b"},"id":"96570","type":"Title"},{"attributes":{},"id":"96506","type":"UndoTool"},{"attributes":{"callback":null},"id":"96485","type":"DataRange1d"},{"attributes":{"overlay":{"id":"96540","type":"BoxAnnotation"}},"id":"96502","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"96492","type":"BasicTicker"}},"id":"96495","type":"Grid"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"96546","type":"Line"},{"attributes":{},"id":"96584","type":"Selection"},{"attributes":{"source":{"id":"96545","type":"ColumnDataSource"}},"id":"96549","type":"CDSView"},{"attributes":{},"id":"96538","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"96541","type":"BoxAnnotation"}},"id":"96504","type":"BoxSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96547","type":"Line"},{"attributes":{"data_source":{"id":"96527","type":"ColumnDataSource"},"glyph":{"id":"96528","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96529","type":"Line"},"selection_glyph":null,"view":{"id":"96531","type":"CDSView"}},"id":"96530","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96522","type":"ColumnDataSource"}},"id":"96526","type":"CDSView"},{"attributes":{"below":[{"id":"96491","type":"LinearAxis"}],"center":[{"id":"96495","type":"Grid"},{"id":"96500","type":"Grid"},{"id":"96543","type":"Legend"}],"left":[{"id":"96496","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96525","type":"GlyphRenderer"},{"id":"96530","type":"GlyphRenderer"},{"id":"96548","type":"GlyphRenderer"},{"id":"96567","type":"GlyphRenderer"},{"id":"96569","type":"Span"}],"title":{"id":"96570","type":"Title"},"toolbar":{"id":"96511","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96483","type":"DataRange1d"},"x_scale":{"id":"96487","type":"LinearScale"},"y_range":{"id":"96485","type":"DataRange1d"},"y_scale":{"id":"96489","type":"LinearScale"}},"id":"96482","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"96582","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96542","type":"PolyAnnotation"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"96530","type":"GlyphRenderer"}]},"id":"96544","type":"LegendItem"},{"attributes":{"children":[{"id":"96591","type":"ToolbarBox"},{"id":"96589","type":"GridBox"}]},"id":"96592","type":"Column"},{"attributes":{},"id":"96558","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"96545","type":"ColumnDataSource"},"glyph":{"id":"96546","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96547","type":"Line"},"selection_glyph":null,"view":{"id":"96549","type":"CDSView"}},"id":"96548","type":"GlyphRenderer"},{"attributes":{},"id":"96539","type":"Selection"},{"attributes":{},"id":"96583","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"96590","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96591","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"96501","type":"PanTool"},{"id":"96502","type":"BoxZoomTool"},{"id":"96503","type":"WheelZoomTool"},{"id":"96504","type":"BoxSelectTool"},{"id":"96505","type":"LassoSelectTool"},{"id":"96506","type":"UndoTool"},{"id":"96507","type":"RedoTool"},{"id":"96508","type":"ResetTool"},{"id":"96509","type":"SaveTool"},{"id":"96510","type":"HoverTool"}]},"id":"96590","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"96522","type":"ColumnDataSource"},"glyph":{"id":"96523","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96524","type":"Circle"},"selection_glyph":null,"view":{"id":"96526","type":"CDSView"}},"id":"96525","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96541","type":"BoxAnnotation"},{"attributes":{},"id":"96503","type":"WheelZoomTool"},{"attributes":{"source":{"id":"96527","type":"ColumnDataSource"}},"id":"96531","type":"CDSView"},{"attributes":{"axis_label":"ESS","formatter":{"id":"96534","type":"BasicTickFormatter"},"ticker":{"id":"96497","type":"BasicTicker"}},"id":"96496","type":"LinearAxis"},{"attributes":{},"id":"96497","type":"BasicTicker"},{"attributes":{"children":[[{"id":"96482","subtype":"Figure","type":"Plot"},0,0]]},"id":"96589","type":"GridBox"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96528","type":"Line"},{"attributes":{},"id":"96536","type":"BasicTickFormatter"},{"attributes":{},"id":"96534","type":"BasicTickFormatter"}],"root_ids":["96592"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"68fae652-7346-4954-85a1-baf38f5093fd","roots":{"96592":"4ff1d0b0-2fce-4c95-a5c5-8ef92742845b"}}];
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