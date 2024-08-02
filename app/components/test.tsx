import React, { useEffect, useRef } from "react";
import Snap from "snapsvg-cjs";

// Assuming shapeFrom and shapeTo are already defined as arrays
const shapeFrom = [
  "M173.659129,42.756738c4.964735-2.526798,12.870404-3.21757,14.215631,1.236142c1.820601,6.027557-5.587753,6.113627-4.401397,9.504556c1.284105,3.670322,15.960826.309309,19.853177,2.856864c1.98497,1.299169,2.236473,3.816993,3.70843,4.94457c1.646031,1.260925,19.99143,2.93407,24.72285,5.56264c3.8402,2.13344,4.351224,7.783144,7.41685,10.50721c4.711975,4.186986,7.465828-1.392532,11.74335,8.653-6.655821-8.373658-6.750011-2.816445-12.747604-7.361243-3.494996-2.648405-3.948538-8.335723-7.355402-10.281475-4.882419-2.788481-21.983973-3.728216-24.860347-5.614718-2.070829-1.358176-1.807297-3.705709-3.692569-4.783008-3.931012-2.246294-18.961738,1.018042-20.402832-3.64432-1.718702-5.560504,5.695304-4.987604,4.381003-9.570807-.931796-3.249341-5.649155-2.70621-12.58114-2.009411Z",
  "M139.04714,55.73623c4.776589-1.92037,17.679572.116797,21.63249,3.70843c3.362713,3.055371-2.411407,11.967995,2.47228,15.45178c5.628275,4.014938,38.008325,12.304853,40.17463,16.68792c1.857541,3.758348-1.364786,7.277897.812947,10.291703c2.622855,3.629819,15.139332,1.542563,32.562893,18.139567-21.681999-15.800986-30.541888-12.525505-34.112991-17.113505-3.027584-3.88971.622798-7.665206-.96555-10.442032-2.086892-3.648404-35.222801-12.617822-39.839044-16.374732-5.456753-4.440955.106884-13.113635-2.360439-15.511456-3.420227-3.323883-14.780071-4.911795-20.377216-4.837675Z",
  "M97.63638,76.75065c2.908446-1.660106,8.874488-1.665085,11.12528.61807c3.985775,4.043083-7.043813,10.541258,3.09036,16.68792c8.931689,5.417322,20.64048-.60395,26.57706,6.18071c6.30714,7.20815,4.75139,20.26756,12.36142,25.34092c8.05882,5.37254,18.237029-7.047595,23.4867-4.3265c5.295432,2.744815.7042,13.06563,3.70843,16.06985c2.14369,2.14369,7.53227.67817,9.88914,3.70843c1.53877,1.97842.01893,5.22588,1.23614,7.41685.58341,1.05014,1.908163,1.711863,3.097403,1.881753c10.63781,1.51969,15.602288,3.955724,22.243517,12.951947-7.563865-8.035144-12.260636-10.301031-22.850359-11.131424-1.268746-.099489-3.239992-.951919-4.117026-2.752147-1.484375-3.046875.123544-5.810328-1.127417-7.429219-2.060408-2.244373-6.472158-.635431-9.529385-3.274576-4.30478-3.716093.919825-13.723786-3.311369-15.820986-4.371046-2.166518-14.920265,10.263235-23.694686,4.304779-8.842646-6.004785-6.523833-18.515607-12.915343-25.755616-5.394141-6.110235-16.574962-.053279-26.152376-5.932484-10.938091-6.714472-.441807-14.11133-3.38039-16.921216-1.92147-1.837318-7.03812-2.513615-9.737099-1.817061Z",
  "M61.17018,99.61928c22.306568,3.863147,30.213587,9.73085,35.84813,19.77828c4.440231,7.917752-11.324125,17.385894-1.97151,23.635458c10.263754,6.858401,32.3607-10.887228,40.91-4.475258c9.62597,7.21948-16.346392,22.05016-9.88914,30.28549c8.012651,10.219026,27.20168,9.45514,34.61198,17.92406c4.16055,4.75491-1.064696,12.863909,5.56264,17.30599c4.019487,2.694127,13.226131-1.638315,14.21564,1.23614.915976,2.660846-4.53946,2.629264-4.525531,4.894727.008316,1.352519,2.201633,3.745227,18.741171,4.376343-2.73845.63048-19.94403,2.210744-20.564891-4.011757-.376342-3.771838,4.819873-3.901717,4.630392-4.545953s-9.359189,2.522591-13.603765-.343674c-6.889239-4.652146-2.61633-14.440256-5.857304-17.801719-7.225172-7.493782-25.561496-7.070311-34.581443-17.657103-8.168519-9.587463,17.456568-24.688694,10.213167-30.094427s-31.024515,11.928546-41.280236,4.299289s5.432705-18.082665,1.749308-24.218868C88.927649,109.45929,83.524192,107.112334,61.17018,99.61928Z",
  "M143.973637,252.914361c10.375906,6.511241,28.072342,22.749981,34.586355,21.704136s14.548319-18.653499,20.783313-26.647856c-17.756947,17.406856-40.925377,9.784006-55.369668,4.94372Z",
  "M43.430389,94.364533c-3.643175,3.000138-22.511356,16.347533-22.243364,20.903403s20.407361,27.031734,27.603211,32.159082c-19.053518-32.527793-9.86014-42.729224-5.359847-53.062485Z",
  "M160.448968,25.865736c6.727477-3.894855,18.836936-9.489283,23.086071-9.824098c3.46976-.514972,10.528874,3.061878,12.193808,3.454383-1.578632.384212-24.762409,3.851508-35.279879,6.369715Z",
  "M271.715452,56.776411c3.393097,2.056368,10.561598,4.701057,11.468387,7.700442s-3.133896,8.518934-3.713197,10.534736c-.464655-2.120197-5.754035-14.75207-7.75519-18.235178Z",
  "M179.846407,10.046906c-11.506132,2.140878-168.311046,90.607148-170,100s151.084449,189.380219,170,180s114.273794-221.085786,110-230-98.493868-52.140878-110-50Z",
];
const shapeTo = [
  "M222.194672,15.769297c19.362599,7.094414,43.894825,18.972855,64.957909,23.474888c2.411804,17.364986-2.363567,46.933697-3.376525,67.048139-13.952856,10.219223-26.512706,14.705833-41.626676,34.321835-10.467617-5.866521-34.999629,2.743412-57.085398-29.39927c1.319424-18.041376-.473876-42.91259-1.92495-61.292862c7.296191-10.648496,39.05564-34.15273,39.05564-34.15273Z",
  "M78.023027,13.360703c-21.501433,1.498972-60.408651,21.215394-61.355386,55.53449-.629287,22.811618,34.797405,42.195459,61.198064,42.791449s89.876816-10.773525,86.998791-64.816459c-1.415893-26.587334-69.683075-34.705677-86.841469-33.50948Z",
  "M169.522019,123.850369c39.471492,48.242936,76.366314,67.258281,113.315933,101.556433-40.816658,4.022997-52.406829,23.772251-114.637566,59.811601-15.042733-54.276912-1.476549-109.493173,1.321633-161.368034Z",
  "M32.165825,137.433421c18.737823,7.138219,62.923305-8.511365,102.11124-5.998695-4.366243,43.273866-2.873394,116.079012-13.830298,143.656645-19.886046-16.978955-84.570469-18.54126-84.570469-18.54126q-5.324082-105.791402-3.710473-119.11669Z",
  "M240.220946,205.442429c0,0,14.650399,9.609748,26.446865,17.809336-26.402341,2.493307-44.033584,10.730125-59.082473,17.230533.373996-.814777.489756-1.246654,1.246653-2.715924c15.449599-6.544931,32.134683-12.867476,52.715636-15.672216-8.818451-5.899324-19.545747-13.178909-19.545747-13.178909q-1.780934-3.47282-1.780934-3.47282Z",
  "M67.171741,145.038255l58.577297-5.819439-2.231696,20.581188-2.147743,2.73279l2.283692-21.176055-56.295451,5.581876q-.186099-1.90036-.186099-1.90036Z",
  "M87.010553,23.618663c-9.139802-.591439-48.111309,11.600935-54.546543,27.924425s7.510043,28.018516,13.242612,34.652584c-3.617769-8.172104-18.036855-17.784828-11.27505-34.257256s44.229797-26.539337,52.578981-28.319753Z",
  "M247.726537,34.440615c0,0,30.989841,10.793014,30.989841,10.793014s-.948658,27.709503-6.874432,45.801186c-.599892-.007183-1.399747-.016761-1.999639-.023945c6.274816-20.045948,6.857035-44.433842,6.857035-44.433842s-32.538908-11.225923-32.538908-11.225923s3.566103-.91049,3.566103-.91049Z",
  "M5.709447,6.390485C8.482115,25.86549,0.537343,244.852249,4.849309,294.633073c87.843987-1.58432,220.781598-5.291743,291.752275.534208C292.89416,200.8928,296.03286,14.83473,290.554953,5.985803c-84.699789-9.304514-232.89526,2.483762-284.845506.404682Z",
];


const AnimatedSvg = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      // Initialize Snap.svg on the SVG element
      const snap = Snap(svgRef.current);

      // Iterate over the path arrays and animate each path
      shapeFrom.forEach((fromPath, index) => {
        const toPath = shapeTo[index];

        // Create a Snap path element
        const pathElement = snap.path(fromPath).attr({
          fill: "none",
          stroke: "hsl(var(--nextui-primary-100))",
          strokeWidth: 2,
        });

        // Animate the path to the target shape
        pathElement.animate({ d: toPath }, 2000, mina.easeinout);
      });
    }
  }, [svgRef]);

  return (
    <div className="relative h-[100dvh]">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        width="100%"
        height="100%"
      >
        {/* Paths are animated dynamically */}
      </svg>
    </div>
  );
};

export default AnimatedSvg;
