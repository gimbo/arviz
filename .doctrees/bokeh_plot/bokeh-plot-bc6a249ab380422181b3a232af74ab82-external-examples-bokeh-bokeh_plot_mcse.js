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
      };var element = document.getElementById("5bc6a0aa-3d53-4938-88af-5f32bfb2c9e5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5bc6a0aa-3d53-4938-88af-5f32bfb2c9e5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"644d667e-e5c9-4b43-92ac-a60e8ccc6273":{"roots":{"references":[{"attributes":{},"id":"114452","type":"Selection"},{"attributes":{"callback":null},"id":"114379","type":"DataRange1d"},{"attributes":{},"id":"114453","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"114470","type":"PolyAnnotation"}},"id":"114401","type":"LassoSelectTool"},{"attributes":{"overlay":{"id":"114455","type":"BoxAnnotation"}},"id":"114358","type":"BoxZoomTool"},{"attributes":{},"id":"114454","type":"Selection"},{"attributes":{},"id":"114399","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114455","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"114387","type":"LinearAxis"}],"center":[{"id":"114391","type":"Grid"},{"id":"114396","type":"Grid"}],"left":[{"id":"114392","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114435","type":"GlyphRenderer"},{"id":"114437","type":"Span"},{"id":"114438","type":"Span"},{"id":"114439","type":"Span"},{"id":"114442","type":"GlyphRenderer"}],"title":{"id":"114444","type":"Title"},"toolbar":{"id":"114407","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114379","type":"DataRange1d"},"x_scale":{"id":"114383","type":"LinearScale"},"y_range":{"id":"114381","type":"DataRange1d"},"y_scale":{"id":"114385","type":"LinearScale"}},"id":"114378","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"114404","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114456","type":"BoxAnnotation"},{"attributes":{},"id":"114383","type":"LinearScale"},{"attributes":{"overlay":{"id":"114468","type":"BoxAnnotation"}},"id":"114398","type":"BoxZoomTool"},{"attributes":{},"id":"114357","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114457","type":"PolyAnnotation"},{"attributes":{},"id":"114402","type":"UndoTool"},{"attributes":{},"id":"114460","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"114469","type":"BoxAnnotation"}},"id":"114400","type":"BoxSelectTool"},{"attributes":{},"id":"114462","type":"BasicTickFormatter"},{"attributes":{},"id":"114464","type":"UnionRenderers"},{"attributes":{},"id":"114363","type":"RedoTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114447","type":"BasicTickFormatter"},"ticker":{"id":"114353","type":"BasicTicker"}},"id":"114352","type":"LinearAxis"},{"attributes":{},"id":"114465","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114426","type":"Dash"},{"attributes":{},"id":"114466","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"114348","type":"BasicTicker"}},"id":"114351","type":"Grid"},{"attributes":{},"id":"114345","type":"LinearScale"},{"attributes":{},"id":"114467","type":"Selection"},{"attributes":{},"id":"114348","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114468","type":"BoxAnnotation"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114449","type":"BasicTickFormatter"},"ticker":{"id":"114348","type":"BasicTicker"}},"id":"114347","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114469","type":"BoxAnnotation"},{"attributes":{},"id":"114343","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114470","type":"PolyAnnotation"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114341","type":"DataRange1d"},{"attributes":{"tools":[{"id":"114357","type":"PanTool"},{"id":"114358","type":"BoxZoomTool"},{"id":"114359","type":"WheelZoomTool"},{"id":"114360","type":"BoxSelectTool"},{"id":"114361","type":"LassoSelectTool"},{"id":"114362","type":"UndoTool"},{"id":"114363","type":"RedoTool"},{"id":"114364","type":"ResetTool"},{"id":"114365","type":"SaveTool"},{"id":"114366","type":"HoverTool"},{"id":"114397","type":"PanTool"},{"id":"114398","type":"BoxZoomTool"},{"id":"114399","type":"WheelZoomTool"},{"id":"114400","type":"BoxSelectTool"},{"id":"114401","type":"LassoSelectTool"},{"id":"114402","type":"UndoTool"},{"id":"114403","type":"RedoTool"},{"id":"114404","type":"ResetTool"},{"id":"114405","type":"SaveTool"},{"id":"114406","type":"HoverTool"}]},"id":"114473","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"114427","type":"ColumnDataSource"},"glyph":{"id":"114426","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114429","type":"CDSView"}},"id":"114428","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"114338","subtype":"Figure","type":"Plot"},0,0],[{"id":"114378","subtype":"Figure","type":"Plot"},0,1]]},"id":"114472","type":"GridBox"},{"attributes":{},"id":"114359","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"114347","type":"LinearAxis"}],"center":[{"id":"114351","type":"Grid"},{"id":"114356","type":"Grid"}],"left":[{"id":"114352","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114421","type":"GlyphRenderer"},{"id":"114423","type":"Span"},{"id":"114424","type":"Span"},{"id":"114425","type":"Span"},{"id":"114428","type":"GlyphRenderer"}],"title":{"id":"114430","type":"Title"},"toolbar":{"id":"114367","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114339","type":"DataRange1d"},"x_scale":{"id":"114343","type":"LinearScale"},"y_range":{"id":"114341","type":"DataRange1d"},"y_scale":{"id":"114345","type":"LinearScale"}},"id":"114338","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"114473","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"114474","type":"ToolbarBox"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114454","type":"Selection"},"selection_policy":{"id":"114453","type":"UnionRenderers"}},"id":"114427","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"114474","type":"ToolbarBox"},{"id":"114472","type":"GridBox"}]},"id":"114475","type":"Column"},{"attributes":{"source":{"id":"114427","type":"ColumnDataSource"}},"id":"114429","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"114353","type":"BasicTicker"}},"id":"114356","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"114456","type":"BoxAnnotation"}},"id":"114360","type":"BoxSelectTool"},{"attributes":{"text":"tau"},"id":"114430","type":"Title"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114462","type":"BasicTickFormatter"},"ticker":{"id":"114388","type":"BasicTicker"}},"id":"114387","type":"LinearAxis"},{"attributes":{},"id":"114405","type":"SaveTool"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114381","type":"DataRange1d"},{"attributes":{},"id":"114451","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"114424","type":"Span"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114465","type":"Selection"},"selection_policy":{"id":"114464","type":"UnionRenderers"}},"id":"114432","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114433","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114434","type":"Circle"},{"attributes":{"callback":null},"id":"114339","type":"DataRange1d"},{"attributes":{},"id":"114385","type":"LinearScale"},{"attributes":{},"id":"114353","type":"BasicTicker"},{"attributes":{"data_source":{"id":"114432","type":"ColumnDataSource"},"glyph":{"id":"114433","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114434","type":"Circle"},"selection_glyph":null,"view":{"id":"114436","type":"CDSView"}},"id":"114435","type":"GlyphRenderer"},{"attributes":{"source":{"id":"114432","type":"ColumnDataSource"}},"id":"114436","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"114437","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114419","type":"Circle"},{"attributes":{"callback":null},"id":"114406","type":"HoverTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"114438","type":"Span"},{"attributes":{},"id":"114388","type":"BasicTicker"},{"attributes":{"source":{"id":"114418","type":"ColumnDataSource"}},"id":"114422","type":"CDSView"},{"attributes":{"ticker":{"id":"114388","type":"BasicTicker"}},"id":"114391","type":"Grid"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114439","type":"Span"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114440","type":"Dash"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"114423","type":"Span"},{"attributes":{"callback":null,"overlay":{"id":"114457","type":"PolyAnnotation"}},"id":"114361","type":"LassoSelectTool"},{"attributes":{},"id":"114393","type":"BasicTicker"},{"attributes":{"data_source":{"id":"114418","type":"ColumnDataSource"},"glyph":{"id":"114419","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114420","type":"Circle"},"selection_glyph":null,"view":{"id":"114422","type":"CDSView"}},"id":"114421","type":"GlyphRenderer"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114460","type":"BasicTickFormatter"},"ticker":{"id":"114393","type":"BasicTicker"}},"id":"114392","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114467","type":"Selection"},"selection_policy":{"id":"114466","type":"UnionRenderers"}},"id":"114441","type":"ColumnDataSource"},{"attributes":{},"id":"114362","type":"UndoTool"},{"attributes":{"dimension":1,"ticker":{"id":"114393","type":"BasicTicker"}},"id":"114396","type":"Grid"},{"attributes":{"data_source":{"id":"114441","type":"ColumnDataSource"},"glyph":{"id":"114440","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114443","type":"CDSView"}},"id":"114442","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114452","type":"Selection"},"selection_policy":{"id":"114451","type":"UnionRenderers"}},"id":"114418","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114420","type":"Circle"},{"attributes":{"source":{"id":"114441","type":"ColumnDataSource"}},"id":"114443","type":"CDSView"},{"attributes":{"callback":null},"id":"114366","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114397","type":"PanTool"},{"id":"114398","type":"BoxZoomTool"},{"id":"114399","type":"WheelZoomTool"},{"id":"114400","type":"BoxSelectTool"},{"id":"114401","type":"LassoSelectTool"},{"id":"114402","type":"UndoTool"},{"id":"114403","type":"RedoTool"},{"id":"114404","type":"ResetTool"},{"id":"114405","type":"SaveTool"},{"id":"114406","type":"HoverTool"}]},"id":"114407","type":"Toolbar"},{"attributes":{},"id":"114403","type":"RedoTool"},{"attributes":{"text":"mu"},"id":"114444","type":"Title"},{"attributes":{},"id":"114364","type":"ResetTool"},{"attributes":{},"id":"114365","type":"SaveTool"},{"attributes":{},"id":"114447","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114425","type":"Span"},{"attributes":{},"id":"114449","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114357","type":"PanTool"},{"id":"114358","type":"BoxZoomTool"},{"id":"114359","type":"WheelZoomTool"},{"id":"114360","type":"BoxSelectTool"},{"id":"114361","type":"LassoSelectTool"},{"id":"114362","type":"UndoTool"},{"id":"114363","type":"RedoTool"},{"id":"114364","type":"ResetTool"},{"id":"114365","type":"SaveTool"},{"id":"114366","type":"HoverTool"}]},"id":"114367","type":"Toolbar"},{"attributes":{},"id":"114397","type":"PanTool"}],"root_ids":["114475"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"644d667e-e5c9-4b43-92ac-a60e8ccc6273","roots":{"114475":"5bc6a0aa-3d53-4938-88af-5f32bfb2c9e5"}}];
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