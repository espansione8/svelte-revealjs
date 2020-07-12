<script>
  var width = 960,
    height = 500;

  var projection = d3
    .geoOrthographic()
    .scale(248)
    .clipAngle(90);

  var path = d3.geoPath().projection(projection);

  // var graticule = d3.geo.graticule()
  //     .extent([[-180, -90], [180 - .1, 90 - .1]]);

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .append("circle")
    .attr("class", "graticule-outline")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", projection.scale());

  d3.json("readme-world-110m.json", function(error, world) {
    var countries = topojson.object(world, world.objects.countries).geometries,
      i = -1,
      n = countries.length;

    var country = svg
      .selectAll(".country")
      .data(countries)
      .enter()
      .insert("path", ".graticule")
      .attr("class", "country")
      .attr("d", path);

    step();

    function step() {
      if (++i >= n) i = 0;

      country.transition().style("fill", function(d, j) {
        return j === i ? "red" : "#b8b8b8";
      });

      d3.transition()
        .delay(250)
        .duration(1250)
        .tween("rotate", function() {
          var point = d3.geoCentroid(countries[i]),
            rotate = d3.interpolate(projection.rotate(), [
              -point[0],
              -point[1]
            ]);
          return function(t) {
            projection.rotate(rotate(t));
            country.attr("d", path);
          };
        })
        .transition()
        .on("end", step);
    }
  });
</script>

<style>
  .country {
    fill: #b8b8b8;
    stroke: #fff;
    stroke-width: 0.5px;
    stroke-linejoin: round;
  }

  .graticule {
    fill: none;
    stroke: #000;
    stroke-opacity: 0.3;
    stroke-width: 0.5px;
  }

  .graticule-outline {
    fill: none;
    stroke: #333;
    stroke-width: 1.5px;
  }

  text {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-anchor: middle;
  }
</style>
