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
      };var element = document.getElementById("a947a313-4684-4ee5-94e6-234543fd4f2d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a947a313-4684-4ee5-94e6-234543fd4f2d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0e167394-01d5-4091-806d-4e26b34fe968":{"roots":{"references":[{"attributes":{},"id":"118674","type":"RedoTool"},{"attributes":{"dimension":1,"ticker":{"id":"118664","type":"BasicTicker"}},"id":"118667","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118708","type":"VBar"},{"attributes":{},"id":"118746","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118737","type":"VBar"},{"attributes":{"source":{"id":"118701","type":"ColumnDataSource"}},"id":"118705","type":"CDSView"},{"attributes":{},"id":"118747","type":"BasicTickFormatter"},{"attributes":{},"id":"118616","type":"LinearScale"},{"attributes":{},"id":"118749","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118703","type":"VBar"},{"attributes":{"callback":null},"id":"118614","type":"DataRange1d"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118736","type":"VBar"},{"attributes":{},"id":"118750","type":"Selection"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118772","type":"Selection"},"selection_policy":{"id":"118771","type":"UnionRenderers"}},"id":"118735","type":"ColumnDataSource"},{"attributes":{},"id":"118751","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"118712","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118702","type":"VBar"},{"attributes":{},"id":"118618","type":"LinearScale"},{"attributes":{},"id":"118752","type":"Selection"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118754","type":"Selection"},"selection_policy":{"id":"118753","type":"UnionRenderers"}},"id":"118701","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118747","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118621","type":"BasicTicker"}},"id":"118620","type":"LinearAxis"},{"attributes":{"data_source":{"id":"118735","type":"ColumnDataSource"},"glyph":{"id":"118736","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118737","type":"VBar"},"selection_glyph":null,"view":{"id":"118739","type":"CDSView"}},"id":"118738","type":"GlyphRenderer"},{"attributes":{},"id":"118753","type":"UnionRenderers"},{"attributes":{},"id":"118668","type":"PanTool"},{"attributes":{},"id":"118621","type":"BasicTicker"},{"attributes":{},"id":"118754","type":"Selection"},{"attributes":{"ticker":{"id":"118621","type":"BasicTicker"}},"id":"118624","type":"Grid"},{"attributes":{},"id":"118755","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"118773","type":"BoxAnnotation"}},"id":"118669","type":"BoxZoomTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118746","type":"BasicTickFormatter"},"ticker":{"id":"118713","type":"FixedTicker"}},"id":"118625","type":"LinearAxis"},{"attributes":{},"id":"118756","type":"Selection"},{"attributes":{"source":{"id":"118695","type":"ColumnDataSource"}},"id":"118699","type":"CDSView"},{"attributes":{},"id":"118626","type":"BasicTicker"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118696","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118757","type":"BoxAnnotation"},{"attributes":{},"id":"118670","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"118626","type":"BasicTicker"}},"id":"118629","type":"Grid"},{"attributes":{"data_source":{"id":"118695","type":"ColumnDataSource"},"glyph":{"id":"118696","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118697","type":"VBar"},"selection_glyph":null,"view":{"id":"118699","type":"CDSView"}},"id":"118698","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118758","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118766","type":"Selection"},"selection_policy":{"id":"118765","type":"UnionRenderers"}},"id":"118717","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"118741","type":"FixedTicker"},{"attributes":{},"id":"118656","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118759","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"118774","type":"BoxAnnotation"}},"id":"118671","type":"BoxSelectTool"},{"attributes":{},"id":"118654","type":"LinearScale"},{"attributes":{},"id":"118762","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"118707","type":"ColumnDataSource"}},"id":"118711","type":"CDSView"},{"attributes":{"data_source":{"id":"118701","type":"ColumnDataSource"},"glyph":{"id":"118702","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118703","type":"VBar"},"selection_glyph":null,"view":{"id":"118705","type":"CDSView"}},"id":"118704","type":"GlyphRenderer"},{"attributes":{},"id":"118763","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118630","type":"PanTool"},{"id":"118631","type":"BoxZoomTool"},{"id":"118632","type":"WheelZoomTool"},{"id":"118633","type":"BoxSelectTool"},{"id":"118634","type":"LassoSelectTool"},{"id":"118635","type":"UndoTool"},{"id":"118636","type":"RedoTool"},{"id":"118637","type":"ResetTool"},{"id":"118638","type":"SaveTool"},{"id":"118639","type":"HoverTool"}]},"id":"118640","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"118775","type":"PolyAnnotation"}},"id":"118672","type":"LassoSelectTool"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"118700","type":"Span"},{"attributes":{},"id":"118630","type":"PanTool"},{"attributes":{},"id":"118765","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118697","type":"VBar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118756","type":"Selection"},"selection_policy":{"id":"118755","type":"UnionRenderers"}},"id":"118707","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"118757","type":"BoxAnnotation"}},"id":"118631","type":"BoxZoomTool"},{"attributes":{},"id":"118766","type":"Selection"},{"attributes":{},"id":"118673","type":"UndoTool"},{"attributes":{"data_source":{"id":"118723","type":"ColumnDataSource"},"glyph":{"id":"118724","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118725","type":"VBar"},"selection_glyph":null,"view":{"id":"118727","type":"CDSView"}},"id":"118726","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118752","type":"Selection"},"selection_policy":{"id":"118751","type":"UnionRenderers"}},"id":"118695","type":"ColumnDataSource"},{"attributes":{},"id":"118632","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118725","type":"VBar"},{"attributes":{},"id":"118767","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118718","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118724","type":"VBar"},{"attributes":{"callback":null,"overlay":{"id":"118758","type":"BoxAnnotation"}},"id":"118633","type":"BoxSelectTool"},{"attributes":{},"id":"118768","type":"Selection"},{"attributes":{"source":{"id":"118735","type":"ColumnDataSource"}},"id":"118739","type":"CDSView"},{"attributes":{"data_source":{"id":"118689","type":"ColumnDataSource"},"glyph":{"id":"118690","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118691","type":"VBar"},"selection_glyph":null,"view":{"id":"118693","type":"CDSView"}},"id":"118692","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"118759","type":"PolyAnnotation"}},"id":"118634","type":"LassoSelectTool"},{"attributes":{},"id":"118769","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"118722","type":"Span"},{"attributes":{"source":{"id":"118689","type":"ColumnDataSource"}},"id":"118693","type":"CDSView"},{"attributes":{},"id":"118635","type":"UndoTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118768","type":"Selection"},"selection_policy":{"id":"118767","type":"UnionRenderers"}},"id":"118723","type":"ColumnDataSource"},{"attributes":{},"id":"118770","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118691","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"118740","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118709","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"118694","type":"Span"},{"attributes":{},"id":"118636","type":"RedoTool"},{"attributes":{},"id":"118771","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118719","type":"VBar"},{"attributes":{},"id":"118637","type":"ResetTool"},{"attributes":{},"id":"118772","type":"Selection"},{"attributes":{"callback":null},"id":"118612","type":"DataRange1d"},{"attributes":{},"id":"118638","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118773","type":"BoxAnnotation"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"118706","type":"Span"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"118728","type":"Span"},{"attributes":{"callback":null},"id":"118639","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118774","type":"BoxAnnotation"},{"attributes":{"source":{"id":"118717","type":"ColumnDataSource"}},"id":"118721","type":"CDSView"},{"attributes":{"data_source":{"id":"118707","type":"ColumnDataSource"},"glyph":{"id":"118708","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118709","type":"VBar"},"selection_glyph":null,"view":{"id":"118711","type":"CDSView"}},"id":"118710","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"118743","type":"Title"},{"attributes":{"source":{"id":"118729","type":"ColumnDataSource"}},"id":"118733","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118775","type":"PolyAnnotation"},{"attributes":{"source":{"id":"118723","type":"ColumnDataSource"}},"id":"118727","type":"CDSView"},{"attributes":{"below":[{"id":"118658","type":"LinearAxis"}],"center":[{"id":"118662","type":"Grid"},{"id":"118667","type":"Grid"},{"id":"118722","type":"Span"},{"id":"118728","type":"Span"},{"id":"118734","type":"Span"},{"id":"118740","type":"Span"}],"left":[{"id":"118663","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118720","type":"GlyphRenderer"},{"id":"118726","type":"GlyphRenderer"},{"id":"118732","type":"GlyphRenderer"},{"id":"118738","type":"GlyphRenderer"}],"title":{"id":"118743","type":"Title"},"toolbar":{"id":"118678","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118612","type":"DataRange1d"},"x_scale":{"id":"118654","type":"LinearScale"},"y_range":{"id":"118614","type":"DataRange1d"},"y_scale":{"id":"118656","type":"LinearScale"}},"id":"118651","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118763","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118659","type":"BasicTicker"}},"id":"118658","type":"LinearAxis"},{"attributes":{"tools":[{"id":"118630","type":"PanTool"},{"id":"118631","type":"BoxZoomTool"},{"id":"118632","type":"WheelZoomTool"},{"id":"118633","type":"BoxSelectTool"},{"id":"118634","type":"LassoSelectTool"},{"id":"118635","type":"UndoTool"},{"id":"118636","type":"RedoTool"},{"id":"118637","type":"ResetTool"},{"id":"118638","type":"SaveTool"},{"id":"118639","type":"HoverTool"},{"id":"118668","type":"PanTool"},{"id":"118669","type":"BoxZoomTool"},{"id":"118670","type":"WheelZoomTool"},{"id":"118671","type":"BoxSelectTool"},{"id":"118672","type":"LassoSelectTool"},{"id":"118673","type":"UndoTool"},{"id":"118674","type":"RedoTool"},{"id":"118675","type":"ResetTool"},{"id":"118676","type":"SaveTool"},{"id":"118677","type":"HoverTool"}]},"id":"118778","type":"ProxyToolbar"},{"attributes":{},"id":"118659","type":"BasicTicker"},{"attributes":{"callback":null},"id":"118677","type":"HoverTool"},{"attributes":{"data_source":{"id":"118717","type":"ColumnDataSource"},"glyph":{"id":"118718","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118719","type":"VBar"},"selection_glyph":null,"view":{"id":"118721","type":"CDSView"}},"id":"118720","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118770","type":"Selection"},"selection_policy":{"id":"118769","type":"UnionRenderers"}},"id":"118729","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"118620","type":"LinearAxis"}],"center":[{"id":"118624","type":"Grid"},{"id":"118629","type":"Grid"},{"id":"118694","type":"Span"},{"id":"118700","type":"Span"},{"id":"118706","type":"Span"},{"id":"118712","type":"Span"}],"left":[{"id":"118625","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118692","type":"GlyphRenderer"},{"id":"118698","type":"GlyphRenderer"},{"id":"118704","type":"GlyphRenderer"},{"id":"118710","type":"GlyphRenderer"}],"title":{"id":"118715","type":"Title"},"toolbar":{"id":"118640","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118612","type":"DataRange1d"},"x_scale":{"id":"118616","type":"LinearScale"},"y_range":{"id":"118614","type":"DataRange1d"},"y_scale":{"id":"118618","type":"LinearScale"}},"id":"118611","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"118778","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"118779","type":"ToolbarBox"},{"attributes":{"text":"tau"},"id":"118715","type":"Title"},{"attributes":{"ticker":{"id":"118659","type":"BasicTicker"}},"id":"118662","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118690","type":"VBar"},{"attributes":{"children":[{"id":"118779","type":"ToolbarBox"},{"id":"118777","type":"GridBox"}]},"id":"118780","type":"Column"},{"attributes":{},"id":"118676","type":"SaveTool"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118731","type":"VBar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118750","type":"Selection"},"selection_policy":{"id":"118749","type":"UnionRenderers"}},"id":"118689","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"118729","type":"ColumnDataSource"},"glyph":{"id":"118730","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118731","type":"VBar"},"selection_glyph":null,"view":{"id":"118733","type":"CDSView"}},"id":"118732","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118668","type":"PanTool"},{"id":"118669","type":"BoxZoomTool"},{"id":"118670","type":"WheelZoomTool"},{"id":"118671","type":"BoxSelectTool"},{"id":"118672","type":"LassoSelectTool"},{"id":"118673","type":"UndoTool"},{"id":"118674","type":"RedoTool"},{"id":"118675","type":"ResetTool"},{"id":"118676","type":"SaveTool"},{"id":"118677","type":"HoverTool"}]},"id":"118678","type":"Toolbar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118762","type":"BasicTickFormatter"},"ticker":{"id":"118741","type":"FixedTicker"}},"id":"118663","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"118734","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118730","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"118713","type":"FixedTicker"},{"attributes":{},"id":"118664","type":"BasicTicker"},{"attributes":{"children":[[{"id":"118611","subtype":"Figure","type":"Plot"},0,0],[{"id":"118651","subtype":"Figure","type":"Plot"},0,1]]},"id":"118777","type":"GridBox"},{"attributes":{},"id":"118675","type":"ResetTool"}],"root_ids":["118780"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"0e167394-01d5-4091-806d-4e26b34fe968","roots":{"118780":"a947a313-4684-4ee5-94e6-234543fd4f2d"}}];
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