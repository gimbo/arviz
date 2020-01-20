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
      };var element = document.getElementById("bee99f9a-9420-4911-aa4a-39e795ef8a02");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bee99f9a-9420-4911-aa4a-39e795ef8a02' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1bf9bc06-4182-411f-ab23-bc5f16c18366":{"roots":{"references":[{"attributes":{"callback":null},"id":"98573","type":"DataRange1d"},{"attributes":{"overlay":{"id":"98644","type":"BoxAnnotation"}},"id":"98590","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"98571","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"bB+PV2EA4D9k68e5+x/gP123AByWP+A/VoM5fjBf4D9OT3Lgyn7gP0cbq0JlnuA/QOfjpP+94D84sxwHmt3gPzF/VWk0/eA/KkuOy84c4T8iF8ctaTzhPxvj/48DXOE/FK848p174T8Me3FUOJvhPwVHqrbSuuE//hLjGG3a4T/23ht7B/rhP++qVN2hGeI/6HaNPzw54j/gQsah1ljiP9kO/wNxeOI/0to3ZguY4j/KpnDIpbfiP8NyqSpA1+I/vD7ijNr24j+8PuKM2vbiP7w+4oza9uI/w3KpKkDX4j/KpnDIpbfiP9LaN2YLmOI/2Q7/A3F44j/gQsah1ljiP+h2jT88OeI/76pU3aEZ4j/23ht7B/rhP/4S4xht2uE/BUeqttK64T8Me3FUOJvhPxSvOPKde+E/G+P/jwNc4T8iF8ctaTzhPypLjsvOHOE/MX9VaTT94D84sxwHmt3gP0Dn46T/veA/RxurQmWe4D9OT3Lgyn7gP1aDOX4wX+A/XbcAHJY/4D9k68e5+x/gP2wfj1dhAOA/bB+PV2EA4D8=","dtype":"float64","shape":[52]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaEYYX0U0HQFoRhhfRTQdAjCRgmcZKB0DOh1Ax9UIHQDLr9HugMwdAdlLB+5IcB0D7g9YEmf0GQC5csdcx2wZA8Sa1ZfKxBkA5N3T8roAGQJOBQQHSSAZAGYXOjdoJBkBSTPz3c8MFQH9Q7IkCdwVAnwTZT1AiBUC/tCsydMgEQGsJxd1WZwRAOgnkrnEABEAuyKa5EZYDQCzk6aTpJgNALrcvl3K1AkDYtsKV1kICQCSDrO/zzQFA7CEZLq9YAUD5ATY8DeQAQLClny/wbwBAAAAAAAAAAAA=","dtype":"float64","shape":[52]}},"selected":{"id":"98639","type":"Selection"},"selection_policy":{"id":"98638","type":"UnionRenderers"}},"id":"98615","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"tAob73QW4z+t1lNRDzbjP6aijLOpVeM/nm7FFUR14z+WOv533pTjP5AGN9p4tOM/iNJvPBPU4z+AnqierfPjP3pq4QBIE+Q/cjYaY+Iy5D9qAlPFfFLkP2TOiycXcuQ/XJrEibGR5D9UZv3rS7HkP00yNk7m0OQ/Rv5usIDw5D8+yqcSGxDlPzeW4HS1L+U/MGIZ109P5T8oLlI56m7lPyH6ipuEjuU/GsbD/R6u5T8Skvxfuc3lPwteNcJT7eU/C141wlPt5T8LXjXCU+3lPxKS/F+5zeU/GsbD/R6u5T8h+oqbhI7lPyguUjnqbuU/MGIZ109P5T83luB0tS/lPz7KpxIbEOU/Rv5usIDw5D9NMjZO5tDkP1Rm/etLseQ/XJrEibGR5D9kzosnF3LkP2oCU8V8UuQ/cjYaY+Iy5D96auEASBPkP4CeqJ6t8+M/iNJvPBPU4z+QBjfaeLTjP5Y6/nfelOM/nm7FFUR14z+mooyzqVXjP63WU1EPNuM/tAob73QW4z+0ChvvdBbjPw==","dtype":"float64","shape":[50]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnxQgDIGGA0CfFCAMgYYDQHYeGM48vANAzMTd7pbvA0D6H9CnOB8EQCvPgvU2TQRACmpF/vR5BEA83oB5nKYEQOIjxP7Q0wRAWPG6xI0ABUCeKrBQ8y0FQPSbtKNAWwVAWsF+o0WKBUAeLyT/wLsFQI73dGAY7AVAecGUaR0dBkDLYahwp0sGQASyVXJWeQZAkFtHvwylBkADysZ9sc0GQAAOmkqt8AZAzK/rYtsPB0CgpplKhigHQH5VhUJdPAdAZcI/H8JIB0AAAAAAAAAAAA==","dtype":"float64","shape":[50]}},"selected":{"id":"98641","type":"Selection"},"selection_policy":{"id":"98640","type":"UnionRenderers"}},"id":"98620","type":"ColumnDataSource"},{"attributes":{},"id":"98589","type":"PanTool"},{"attributes":{"data_source":{"id":"98610","type":"ColumnDataSource"},"glyph":{"id":"98611","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98612","type":"Patch"},"selection_glyph":null,"view":{"id":"98614","type":"CDSView"}},"id":"98613","type":"GlyphRenderer"},{"attributes":{"source":{"id":"98610","type":"ColumnDataSource"}},"id":"98614","type":"CDSView"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98621","type":"Patch"},{"attributes":{},"id":"98642","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"98589","type":"PanTool"},{"id":"98590","type":"BoxZoomTool"},{"id":"98591","type":"WheelZoomTool"},{"id":"98592","type":"BoxSelectTool"},{"id":"98593","type":"LassoSelectTool"},{"id":"98594","type":"UndoTool"},{"id":"98595","type":"RedoTool"},{"id":"98596","type":"ResetTool"},{"id":"98597","type":"SaveTool"},{"id":"98598","type":"HoverTool"}]},"id":"98599","type":"Toolbar"},{"attributes":{"source":{"id":"98625","type":"ColumnDataSource"}},"id":"98629","type":"CDSView"},{"attributes":{"text":""},"id":"98630","type":"Title"},{"attributes":{"formatter":{"id":"98634","type":"BasicTickFormatter"},"ticker":{"id":"98580","type":"BasicTicker"}},"id":"98579","type":"LinearAxis"},{"attributes":{},"id":"98591","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"98580","type":"BasicTicker"}},"id":"98583","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98612","type":"Patch"},{"attributes":{},"id":"98632","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"VMewc+SGxj8395P8TQXHPxknd4W3g8c//FZaDiECyD/ehj2XioDIP8G2ICD0/sg/pOYDqV19yT+GFucxx/vJP2lGyroweso/THatQ5r4yj8uppDMA3fLPxHWc1Vt9cs/8wVX3tZzzD/WNTpnQPLMP7hlHfCpcM0/m5UAeRPvzT9+xeMBfW3OP2D1xorm684/QyWqE1Bqzz8mVY2cuejPP4RCuJKRM9A/dtopV8Zy0D9ncpsb+7HQP1gKDeAv8dA/SaJ+pGQw0T86OvBomW/RPyzSYS3OrtE/HWrT8QLu0T8OAkW2Ny3SPwCatnpsbNI/8TEoP6Gr0j/iyZkD1urSP9RhC8gKKtM/xfl8jD9p0z+2ke5QdKjTP6gpYBWp59M/mcHR2d0m1D+KWUOeEmbUP3zxtGJHpdQ/bYkmJ3zk1D9eIZjrsCPVP1C5CbDlYtU/QVF7dBqi1T8y6ew4T+HVPySBXv2DINY/FBnQwbhf1j8GsUGG7Z7WP/hIs0oi3tY/6OAkD1cd1z/aeJbTi1zXP8sQCJjAm9c/vKh5XPXa1z+uQOsgKhrYP5/YXOVeWdg/kHDOqZOY2D+CCEBuyNfYP3OgsTL9Ftk/ZDgj9zFW2T9W0JS7ZpXZP0doBoCb1Nk/OAB4RNAT2j8qmOkIBVPaPxswW805kto/DMjMkW7R2j/+Xz5WoxDbP+/3rxrYT9s/4I8h3wyP2z/RJ5OjQc7bP8O/BGh2Ddw/tFd2LKtM3D+l7+fw34vcP5eHWbUUy9w/iB/LeUkK3T95tzw+fkndP2tPrgKziN0/XOcfx+fH3T9Nf5GLHAfePz4XA1BRRt4/MK90FIaF3j8hR+bYusTePxLfV53vA98/BHfJYSRD3z/1DjsmWYLfP+amrOqNwd8/5qas6o3B3z/mpqzqjcHfP/UOOyZZgt8/BHfJYSRD3z8S31ed7wPfPyFH5ti6xN4/MK90FIaF3j8+FwNQUUbeP01/kYscB94/XOcfx+fH3T9rT64Cs4jdP3m3PD5+Sd0/iB/LeUkK3T+Xh1m1FMvcP6Xv5/Dfi9w/tFd2LKtM3D/DvwRodg3cP9Enk6NBzts/4I8h3wyP2z/v968a2E/bP/5fPlajENs/DMjMkW7R2j8bMFvNOZLaPyqY6QgFU9o/OAB4RNAT2j9HaAaAm9TZP1bQlLtmldk/ZDgj9zFW2T9zoLEy/RbZP4IIQG7I19g/kHDOqZOY2D+f2FzlXlnYP65A6yAqGtg/vKh5XPXa1z/LEAiYwJvXP9p4ltOLXNc/6OAkD1cd1z/4SLNKIt7WPwaxQYbtntY/FBnQwbhf1j8kgV79gyDWPzLp7DhP4dU/QVF7dBqi1T9QuQmw5WLVP14hmOuwI9U/bYkmJ3zk1D988bRiR6XUP4pZQ54SZtQ/mcHR2d0m1D+oKWAVqefTP7aR7lB0qNM/xfl8jD9p0z/UYQvICirTP+LJmQPW6tI/8TEoP6Gr0j8AmrZ6bGzSPw4CRbY3LdI/HWrT8QLu0T8s0mEtzq7RPzo68GiZb9E/SaJ+pGQw0T9YCg3gL/HQP2dymxv7sdA/dtopV8Zy0D+EQriSkTPQPyZVjZy56M8/QyWqE1Bqzz9g9caK5uvOP37F4wF9bc4/m5UAeRPvzT+4ZR3wqXDNP9Y1OmdA8sw/8wVX3tZzzD8R1nNVbfXLPy6mkMwDd8s/THatQ5r4yj9pRsq6MHrKP4YW5zHH+8k/pOYDqV19yT/BtiAg9P7IP96GPZeKgMg//FZaDiECyD8ZJ3eFt4PHPzf3k/xNBcc/VMewc+SGxj9Ux7Bz5IbGPw==","dtype":"float64","shape":[170]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4PL0kyj4/z/g8vSTKPj/P+5mBzLgFP8/++EvvHcw/j9psqGhwlH9PxGeK/4fdfw/H10YC9Ob+z9Dfk+0YcX6P5kUByqe8/k/ACCodKIp+T/jKVmNmmX4P+PM9nNQqfc/f54wOrP09j8QUy4t50b2P8dH1FGbpPU/PxWCkTIM9T/3ikSktH/0P3kRuK5L+/M/1f6VqDF98z9Cg4QslwnzP4VuR1WHnPI/MY1uZOc18j8SQ895JNfxP68n1TiPfPE/imSY97Eo8T9qMUNq19fwP31hnI/QiPA/xfjwqF058D8MxAUnv9bvP+rYWej/N+8/ERHvTtSR7j8t17fs3uDtPw9zwwjDJe0/cTMJTyNl7D/T+Yqtp5XrPycAZNb0ueo/GMHgArXU6T/lY20DHOXoPxI+R+478ec/tipympD65j9Kb/aLewXmP7KWoaqJFOU/X2MJRZAs5D9PshkpmE7jP01yqF+qfuI/hmU0z8y54T8qW8g97QfhP+VJj7htXuA/5yrKD5aI3z+77NUTiGfeP5rssHXXWd0/MATjIrpU3D+2gK0PjGnbP5SQJGGxg9o/+j+FipWm2T+h5ZPlVNHYPw80vNvE/tc/Hc+/960z1z+6twX8YmbWP1j+H7LQptU/fpEt9nvl1D+Qa27iMyzUPx1dTBTTb9M/WxFKK9y20j8ZTVmC3fzRPw5nRiw1PtE/EJZvhwWA0D/NzulUAYPPP1vbU0ntAc4/tKY6TqKCzD/fypDW3APLP0N7oqcejMk//8fZPBkdyD9wYaC41b7GP6vukRKIfcU/FI7TOQdSxD8AKg7BljjDP5mT3DiHQMI/+4XJd1xswT+UOmivabTAP06cpjoKHsA/J3Tuzi09vz+GcHi4FYm+P2+F0eJCHr4/zLKmu6X2vT8AAAAAAAAAAA==","dtype":"float64","shape":[170]}},"selected":{"id":"98637","type":"Selection"},"selection_policy":{"id":"98636","type":"UnionRenderers"}},"id":"98610","type":"ColumnDataSource"},{"attributes":{},"id":"98634","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"98579","type":"LinearAxis"}],"center":[{"id":"98583","type":"Grid"},{"id":"98588","type":"Grid"}],"left":[{"id":"98584","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"98613","type":"GlyphRenderer"},{"id":"98618","type":"GlyphRenderer"},{"id":"98623","type":"GlyphRenderer"},{"id":"98628","type":"GlyphRenderer"}],"title":{"id":"98630","type":"Title"},"toolbar":{"id":"98599","type":"Toolbar"},"x_range":{"id":"98571","type":"DataRange1d"},"x_scale":{"id":"98575","type":"LinearScale"},"y_range":{"id":"98573","type":"DataRange1d"},"y_scale":{"id":"98577","type":"LinearScale"}},"id":"98570","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"98636","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"98585","type":"BasicTicker"}},"id":"98588","type":"Grid"},{"attributes":{},"id":"98637","type":"Selection"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98611","type":"Patch"},{"attributes":{"data_source":{"id":"98625","type":"ColumnDataSource"},"glyph":{"id":"98626","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98627","type":"Patch"},"selection_glyph":null,"view":{"id":"98629","type":"CDSView"}},"id":"98628","type":"GlyphRenderer"},{"attributes":{},"id":"98638","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98627","type":"Patch"},{"attributes":{},"id":"98639","type":"Selection"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98626","type":"Patch"},{"attributes":{"data_source":{"id":"98615","type":"ColumnDataSource"},"glyph":{"id":"98616","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98617","type":"Patch"},"selection_glyph":null,"view":{"id":"98619","type":"CDSView"}},"id":"98618","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"98645","type":"BoxAnnotation"}},"id":"98592","type":"BoxSelectTool"},{"attributes":{},"id":"98594","type":"UndoTool"},{"attributes":{},"id":"98640","type":"UnionRenderers"},{"attributes":{},"id":"98585","type":"BasicTicker"},{"attributes":{},"id":"98575","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"BCpuJO4M5j/89aaGiCzmP/XB3+giTOY/7o0YS71r5j/mWVGtV4vmP98lig/yquY/2PHCcYzK5j/QvfvTJurmP8mJNDbBCec/wlVtmFsp5z+6Iab69UjnP7Pt3lyQaOc/rLkXvyqI5z+khVAhxafnP51RiYNfx+c/lh3C5fnm5z+O6fpHlAboP4e1M6ouJug/gIFsDMlF6D94TaVuY2XoP3EZ3tD9hOg/aeUWM5ik6D9isU+VMsToP1t9iPfM4+g/U0nBWWcD6T9MFfq7ASPpP0XhMh6cQuk/Pa1rgDZi6T82eaTi0IHpPy9F3URroek/JxEWpwXB6T8g3U4JoODpPxmph2s6AOo/EXXAzdQf6j8KQfkvbz/qPwMNMpIJX+o/+9hq9KN+6j/0pKNWPp7qP+1w3LjYveo/5TwVG3Pd6j/eCE59Df3qP9fUht+nHOs/z6C/QUI86z/IbPij3FvrP8A4MQZ3e+s/uQRqaBGb6z+y0KLKq7rrP6qc2yxG2us/o2gUj+D56z+cNE3xehnsP5QAhlMVOew/jcy+ta9Y7D+GmPcXSnjsP35kMHrkl+w/dzBp3H637D9w/KE+GdfsP2jI2qCz9uw/YZQTA04W7T9aYExl6DXtP1IshceCVe0/S/i9KR117T9ExPaLt5TtPzyQL+5RtO0/NVxoUOzT7T8uKKGyhvPtPyb02RQhE+4/H8ASd7sy7j8fwBJ3uzLuPx/AEne7Mu4/JvTZFCET7j8uKKGyhvPtPzVcaFDs0+0/PJAv7lG07T9ExPaLt5TtP0v4vSkdde0/UiyFx4JV7T9aYExl6DXtP2GUEwNOFu0/aMjaoLP27D9w/KE+GdfsP3cwadx+t+w/fmQweuSX7D+GmPcXSnjsP43MvrWvWOw/lACGUxU57D+cNE3xehnsP6NoFI/g+es/qpzbLEba6z+y0KLKq7rrP7kEamgRm+s/wDgxBnd76z/IbPij3FvrP8+gv0FCPOs/19SG36cc6z/eCE59Df3qP+U8FRtz3eo/7XDcuNi96j/0pKNWPp7qP/vYavSjfuo/Aw0ykglf6j8KQfkvbz/qPxF1wM3UH+o/GamHazoA6j8g3U4JoODpPycRFqcFwek/L0XdRGuh6T82eaTi0IHpPz2ta4A2Yuk/ReEyHpxC6T9MFfq7ASPpP1NJwVlnA+k/W32I98zj6D9isU+VMsToP2nlFjOYpOg/cRne0P2E6D94TaVuY2XoP4CBbAzJReg/h7Uzqi4m6D+O6fpHlAboP5YdwuX55uc/nVGJg1/H5z+khVAhxafnP6y5F78qiOc/s+3eXJBo5z+6Iab69UjnP8JVbZhbKec/yYk0NsEJ5z/QvfvTJurmP9jxwnGMyuY/3yWKD/Kq5j/mWVGtV4vmP+6NGEu9a+Y/9cHf6CJM5j/89aaGiCzmPwQqbiTuDOY/BCpuJO4M5j8=","dtype":"float64","shape":[136]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEZZ4zDzjAP0RlnjMPOMA/75j5FYR5wD9BC59sA/TAPwoaasHIsME/VXY+k6Klwj/p5wewi8PDP87unDM0IcU/X1NSxSqixj+yuJQL4kPIPzDAaPWN+8k/EJfTFQPNyz8e5GogcbbNP5+t8LBpss8/0L9kJTHd0D8BPnLjeevRP4dxU/R9/tI/o+JvJSId1D8uuz+X1TvVP4nr/pjobtY/pmylAq2d1z908KBsAdvYPycA9PKlJto/CwFx851+2z9QF8ESi+HcP8BwjgXjUd4/TC1z1azH3z/3A5MGmqjgP1bFd3jLcOE/K+Aps8hG4j+n22M9lyLjP6iCG5O2CeQ/fr6D3y4E5T/4d7sVXgzmPzqGlLXBLuc/sU7vvY1m6D9Jzo2s97rpP83K7ZuxKOs/pT6uaNa57D8qXSziWmnuPxr+vX33GvA/+x6FNpQN8T+NiqeUKQ3yPx6EKQS5FfM/McnrCKon9D+AlP/Rhjz1P/9qYur/UvY/k+rkoc5o9z+af1EOxX74P00tj2TOi/k/pQeP9PCS+j9QWlx81ZD7P2CIOJpchfw/VHfjMaVw/T9A0AL6m1L+PxfhVpIeKv8/djBFIMr3/z/W5Rvy3lwAQDA8uWGIugBAQQgm7zIUAUBGh3hL92gBQLU50BPGugFAwkD2qmYHAkB44TypdVACQHysglzalAJAUgXek0HXAkCKnTiTvBQDQFZERZWNTwNAAAAAAAAAAAA=","dtype":"float64","shape":[136]}},"selected":{"id":"98643","type":"Selection"},"selection_policy":{"id":"98642","type":"UnionRenderers"}},"id":"98625","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"98632","type":"BasicTickFormatter"},"ticker":{"id":"98585","type":"BasicTicker"}},"id":"98584","type":"LinearAxis"},{"attributes":{"callback":null},"id":"98598","type":"HoverTool"},{"attributes":{},"id":"98595","type":"RedoTool"},{"attributes":{},"id":"98641","type":"Selection"},{"attributes":{"source":{"id":"98620","type":"ColumnDataSource"}},"id":"98624","type":"CDSView"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98616","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98645","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"98620","type":"ColumnDataSource"},"glyph":{"id":"98621","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98622","type":"Patch"},"selection_glyph":null,"view":{"id":"98624","type":"CDSView"}},"id":"98623","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98644","type":"BoxAnnotation"},{"attributes":{},"id":"98577","type":"LinearScale"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98622","type":"Patch"},{"attributes":{"callback":null,"overlay":{"id":"98646","type":"PolyAnnotation"}},"id":"98593","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"98646","type":"PolyAnnotation"},{"attributes":{},"id":"98580","type":"BasicTicker"},{"attributes":{},"id":"98597","type":"SaveTool"},{"attributes":{},"id":"98643","type":"Selection"},{"attributes":{},"id":"98596","type":"ResetTool"},{"attributes":{"source":{"id":"98615","type":"ColumnDataSource"}},"id":"98619","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98617","type":"Patch"}],"root_ids":["98570"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"1bf9bc06-4182-411f-ab23-bc5f16c18366","roots":{"98570":"bee99f9a-9420-4911-aa4a-39e795ef8a02"}}];
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