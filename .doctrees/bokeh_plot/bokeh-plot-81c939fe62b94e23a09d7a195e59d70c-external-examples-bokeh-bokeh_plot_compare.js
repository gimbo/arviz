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
      };var element = document.getElementById("f76e3127-70e2-4269-b9e7-a3e488675793");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f76e3127-70e2-4269-b9e7-a3e488675793' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5ca51958-1350-4fe3-a442-e0e875912c45":{"roots":{"references":[{"attributes":{},"id":"93765","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"93702","type":"BasicTicker"}},"id":"93705","type":"Grid"},{"attributes":{},"id":"93702","type":"BasicTicker"},{"attributes":{},"id":"93773","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93755","type":"Circle"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93750","type":"MultiLine"},{"attributes":{},"id":"93707","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93751","type":"MultiLine"},{"attributes":{"callback":null},"id":"93720","type":"HoverTool"},{"attributes":{},"id":"93766","type":"Selection"},{"attributes":{"overlay":{"id":"93775","type":"BoxAnnotation"}},"id":"93712","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"93776","type":"BoxAnnotation"}},"id":"93714","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"93744","type":"ColumnDataSource"},"glyph":{"id":"93745","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93746","type":"Circle"},"selection_glyph":null,"view":{"id":"93748","type":"CDSView"}},"id":"93747","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93739","type":"ColumnDataSource"}},"id":"93743","type":"CDSView"},{"attributes":{},"id":"93772","type":"Selection"},{"attributes":{},"id":"93768","type":"Selection"},{"attributes":{},"id":"93717","type":"RedoTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93740","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93746","type":"Circle"},{"attributes":{"data_source":{"id":"93739","type":"ColumnDataSource"},"glyph":{"id":"93740","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93741","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93743","type":"CDSView"}},"id":"93742","type":"GlyphRenderer"},{"attributes":{},"id":"93770","type":"Selection"},{"attributes":{},"id":"93774","type":"Selection"},{"attributes":{"text":""},"id":"93760","type":"Title"},{"attributes":{"data_source":{"id":"93734","type":"ColumnDataSource"},"glyph":{"id":"93735","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93736","type":"Triangle"},"selection_glyph":null,"view":{"id":"93738","type":"CDSView"}},"id":"93737","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[61.5159539736469],"y":[-0.75]},"selected":{"id":"93766","type":"Selection"},"selection_policy":{"id":"93765","type":"UnionRenderers"}},"id":"93734","type":"ColumnDataSource"},{"attributes":{},"id":"93719","type":"SaveTool"},{"attributes":{},"id":"93762","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"xs":[[61.360479636844296,61.67142831044951]],"ys":[[-0.75,-0.75]]},"selected":{"id":"93768","type":"Selection"},"selection_policy":{"id":"93767","type":"UnionRenderers"}},"id":"93739","type":"ColumnDataSource"},{"attributes":{"source":{"id":"93754","type":"ColumnDataSource"}},"id":"93758","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93741","type":"MultiLine"},{"attributes":{},"id":"93699","type":"LinearScale"},{"attributes":{},"id":"93697","type":"LinearScale"},{"attributes":{"axis_label":"Deviance","formatter":{"id":"93763","type":"BasicTickFormatter"},"ticker":{"id":"93702","type":"BasicTicker"}},"id":"93701","type":"LinearAxis"},{"attributes":{"below":[{"id":"93701","type":"LinearAxis"}],"center":[{"id":"93705","type":"Grid"},{"id":"93710","type":"Grid"}],"left":[{"id":"93706","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"93737","type":"GlyphRenderer"},{"id":"93742","type":"GlyphRenderer"},{"id":"93747","type":"GlyphRenderer"},{"id":"93752","type":"GlyphRenderer"},{"id":"93757","type":"GlyphRenderer"},{"id":"93759","type":"Span"}],"title":{"id":"93760","type":"Title"},"toolbar":{"id":"93721","type":"Toolbar"},"x_range":{"id":"93693","type":"DataRange1d"},"x_scale":{"id":"93697","type":"LinearScale"},"y_range":{"id":"93695","type":"DataRange1d"},"y_scale":{"id":"93699","type":"LinearScale"}},"id":"93692","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"xs":[[58.59133358929195,63.99275900086259],[58.922529781957465,64.10937816533634]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"93772","type":"Selection"},"selection_policy":{"id":"93771","type":"UnionRenderers"}},"id":"93749","type":"ColumnDataSource"},{"attributes":{},"id":"93718","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93776","type":"BoxAnnotation"},{"attributes":{"source":{"id":"93744","type":"ColumnDataSource"}},"id":"93748","type":"CDSView"},{"attributes":{},"id":"93711","type":"PanTool"},{"attributes":{},"id":"93767","type":"UnionRenderers"},{"attributes":{},"id":"93769","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"93707","type":"BasicTicker"}},"id":"93710","type":"Grid"},{"attributes":{"callback":null},"id":"93693","type":"DataRange1d"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"93732","type":"FixedTicker"},{"attributes":{"data_source":{"id":"93754","type":"ColumnDataSource"},"glyph":{"id":"93755","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93756","type":"Circle"},"selection_glyph":null,"view":{"id":"93758","type":"CDSView"}},"id":"93757","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"93777","type":"PolyAnnotation"},{"attributes":{"source":{"id":"93734","type":"ColumnDataSource"}},"id":"93738","type":"CDSView"},{"attributes":{},"id":"93763","type":"BasicTickFormatter"},{"attributes":{},"id":"93771","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"93749","type":"ColumnDataSource"},"glyph":{"id":"93750","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93751","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93753","type":"CDSView"}},"id":"93752","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"93762","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"93732","type":"FixedTicker"}},"id":"93706","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93735","type":"Triangle"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93745","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93756","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93736","type":"Triangle"},{"attributes":{"callback":null,"overlay":{"id":"93777","type":"PolyAnnotation"}},"id":"93715","type":"LassoSelectTool"},{"attributes":{},"id":"93716","type":"UndoTool"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"93695","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[61.29204629507727,61.5159539736469],"y":[0.0,-1.0]},"selected":{"id":"93770","type":"Selection"},"selection_policy":{"id":"93769","type":"UnionRenderers"}},"id":"93744","type":"ColumnDataSource"},{"attributes":{},"id":"93713","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[59.6908040037226,59.712642429907305],"y":[0.0,-1.0]},"selected":{"id":"93774","type":"Selection"},"selection_policy":{"id":"93773","type":"UnionRenderers"}},"id":"93754","type":"ColumnDataSource"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":61.29204629507727},"id":"93759","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93775","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93711","type":"PanTool"},{"id":"93712","type":"BoxZoomTool"},{"id":"93713","type":"WheelZoomTool"},{"id":"93714","type":"BoxSelectTool"},{"id":"93715","type":"LassoSelectTool"},{"id":"93716","type":"UndoTool"},{"id":"93717","type":"RedoTool"},{"id":"93718","type":"ResetTool"},{"id":"93719","type":"SaveTool"},{"id":"93720","type":"HoverTool"}]},"id":"93721","type":"Toolbar"},{"attributes":{"source":{"id":"93749","type":"ColumnDataSource"}},"id":"93753","type":"CDSView"}],"root_ids":["93692"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"5ca51958-1350-4fe3-a442-e0e875912c45","roots":{"93692":"f76e3127-70e2-4269-b9e7-a3e488675793"}}];
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