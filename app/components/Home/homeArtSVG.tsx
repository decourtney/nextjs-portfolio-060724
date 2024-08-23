import { ArtPicture } from "@/app/utilities/svgs";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ArtSVG = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Different transforms for different elements
  const moveX1 = useTransform(x, [0, window.innerWidth], [-5, 5]);
  const moveY1 = useTransform(y, [0, window.innerHeight], [-5, 5]);

  const moveX2 = useTransform(x, [0, window.innerWidth], [5, -5]);
  const moveY2 = useTransform(y, [0, window.innerHeight], [5, -5]);

  const moveX3 = useTransform(x, [0, window.innerWidth], [-2.5, 2.5]);
  const moveY3 = useTransform(y, [0, window.innerHeight], [-2.5, 2.5]);

  const moveX4 = useTransform(x, [0, window.innerWidth], [2.5, -2.5]);
  const moveY4 = useTransform(y, [0, window.innerHeight], [2.5, -2.5]);

  const handleMouseMove = (event: MouseEvent) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
      >
        <motion.path
          id="ground"
          fill="hsl(var(--nextui-content1-200))"
          style={{ x: moveX1, y: moveY1 }}
          d="m 115.41016,219.45312 -24.984379,3.9629 0.181641,3.26171 -4.88086,2.16993 4.701172,0.90234 2.322266,5.54297 33.98047,-7.75391 z m 161.17382,0.53907 -35.70312,16.1582 6.93945,0.14844 -2.80078,7.75586 c -15.65502,4.16509 -23.91365,6.31926 -24.77539,6.46289 -0.86174,0.14362 7.75494,-0.79005 25.85156,-2.80078 l 1.47461,7.86132 47.3418,-17.25976 z m -11.85937,1.07812 -26.45313,2.09375 7.39258,0.20899 0.82031,7.21289 z m -191.482423,5.07227 -69.9511714,11.09765 -2.15625,13.47657 22.6386714,5.92968 -18.8652339,1.07813 -0.5390625,15.09375 49.2226564,-0.15625 -0.05078,-0.78125 11.029296,-1.08399 -5.966796,-1.98828 6.689453,-4.16015 9.222656,-2.34961 -7.052734,-0.54297 2.71289,-5.42383 5.244141,-1.08594 -4.882813,-3.07422 -1.808593,-5.42382 7.414062,-2.53125 -5.605469,-1.26563 -0.128906,-1.12695 -23.994141,4.04101 23.833985,-5.43945 -0.433594,-3.80469 6.689453,-1.44531 -6.148437,-1.80859 -1.988282,-5.9668 10.488282,3.25391 z m 75.589843,2.47461 -58.347655,9.82617 -1.322266,5.95312 -5.425781,4.33985 6.330078,-1.26563 0.541016,7.05274 -8.859375,4.70117 7.59375,-1.08594 1.085937,3.25586 c -10.125706,5.54504 -14.828734,8.31641 -14.105468,8.31641 0.723263,0 6.149683,-1.86665 16.27539,-5.60352 l 5.0625,4.70117 -10.103515,3.74414 4.044921,-0.0117 4.431641,-1.20118 0.06055,1.18555 66.55273,-0.21094 18.29688,-3.76172 c -0.0299,-0.0138 -0.0681,-0.0312 -0.0977,-0.0449 l -29.54297,3.76953 1.29297,-8.18554 13.14258,-3.66407 -13.57422,0.2168 1.29297,-10.77344 7.83008,0.44532 1.16797,-1.51758 -8.99805,-1.94336 -0.86133,-10.55664 14.00391,-0.42969 -13.35742,-3.23242 -0.53125,-3.71485 z m 91.29297,5.28711 -12.3418,1.96484 8.23828,0.17578 z m 56.4043,12.5 -48.83008,9.86523 0.33594,1.78906 -10.3418,-1.07617 9.91016,4.0918 v 6.46289 l -24.04493,5.23633 0.32227,0.0469 -0.0293,0.11524 24.39844,-3.45899 -0.8125,6.9961 44.7793,-5.81055 z m -133.0586,2.61328 -1.59179,1.33203 10.53711,0.59961 z m -3.52929,23.85351 -63.689457,2.75 0.142578,2.76953 h -9.222656 l 11.392578,3.61719 -7.957031,3.43555 -15.369141,-5.60547 6.328125,5.24414 -11.933594,-1.08594 -1.988281,-4.70117 -1.628906,4.70117 -7.955078,-4.70117 3.017578,-2.1543 -6.939453,0.29883 -0.236328,0.0469 -0.002,-0.0352 L 11.375,279.28711 5.9863281,295.45703 113.25391,289.52734 c 122.54188,5.39041 183.81445,7.90624 183.81445,7.54688 0,-0.35936 -0.71881,-7.18609 -2.15625,-20.48242 l -47.73242,2.10547 -0.006,0.043 -1.20508,0.0117 -24.36719,1.07422 7.08203,-0.91992 -76.94922,0.69531 -0.43164,-4.95508 z m -82.748051,3.57422 -0.154297,0.006 -0.353515,0.13086 z"
        />
        <motion.path
          id="cloud"
          fill="hsl(var(--nextui-primary-200))"
          style={{ x: moveX2, y: moveY2 }}
          d="m 53.275391,60.009766 -2.908204,7.49414 h -0.002 l -4.375,11.273438 1.091797,-9.605469 0.01172,-0.109375 -0.164063,0.1875 -6.017578,6.876953 c -1.030356,6.034941 -1.693893,8.979225 -1.988281,8.832031 -0.294387,-0.147191 -0.661933,-2.57691 -1.103516,-7.287109 l -9.49414,4.857422 -1.544922,8.390625 31.794922,-7.50586 -9.052735,3.751954 5.960938,2.871093 18.326172,-7.949218 -12.806641,7.949218 6.84375,4.857422 23.404297,-11.259765 -14.572266,9.050781 1.546875,2.429687 22.298828,-12.144531 -4.416015,4.636719 8.611325,3.533203 9.49414,-7.064453 -5.07812,6.402344 8.39062,2.429687 16.33789,-14.794922 -1.10351,-8.167969 -7.06641,6.402344 4.63672,-8.390625 -8.61133,-1.544922 -9.93554,9.273438 5.74218,-8.390625 -10.82031,-0.220703 -8.167968,8.169922 3.089848,-5.519532 c -5.298985,-2.79668 -8.167798,-3.901273 -8.609379,-3.3125 -0.44158,0.588776 -3.312354,4.93169 -8.611328,13.027344 l 6.623047,-15.455078 -6.248047,-3.320313 -0.816406,-0.433593 -11.873047,8.943359 -4.246094,3.199219 5.962891,-8.167969 -1.558594,-0.216797 -6.390625,-0.888672 -4.195312,4.195313 1.240234,-4.333985 0.527344,-1.847656 -0.398438,-0.04297 z"
        />
        <motion.path
          id="sun"
          fill="hsl(var(--nextui-secondary-100))"
          style={{ x: moveX3, y: moveY3 }}
          d="m 55.976562,20.619141 -26.25,17.830078 -4.457031,11.638672 7.181641,2.724609 -7.429688,1.484375 -2.228515,8.419922 L 53.5,54.050781 26.013672,65.441406 l 3.466797,4.208985 8.171875,-2.228516 -6.6875,7.181641 3.96289,0.742187 12.001953,-6.095703 0.164063,-0.1875 -0.01172,0.109375 3.285156,-1.667969 2.908204,-7.49414 9.759765,1.060546 3.09375,-1.572265 -3.222656,3.46289 -1.240234,4.333985 4.195312,-4.195313 6.390625,0.888672 4.773438,-3.5 c -3.962123,5.117742 -5.94336,7.924657 -5.94336,8.419922 0,0.159449 0.361475,0.243183 1.011719,0.265625 l 11.873047,-8.943359 0.816406,0.433593 4.623047,-8.347656 -5.943359,1.980469 5.697265,-6.4375 L 85.445312,35.972656 71.330078,46.621094 84.455078,32.505859 79.005859,29.78125 48.794922,44.640625 75.787109,27.552734 69.84375,21.363281 c -8.749687,5.28283 -13.206005,8.006787 -13.371094,8.171875 -0.165088,0.165089 -0.331005,-2.807744 -0.496094,-8.916015 z"
        />
        <motion.path
          id="roof"
          fill="hsl(var(--nextui-content1-300))"
          style={{ x: moveX4, y: moveY4 }}
          d="m 199.84961,55.414062 -3.51367,3.16211 2.81054,3.33789 -5.9707,-0.527343 -3.16211,4.216797 5.97266,3.513671 -10.36524,-0.351562 -0.70312,4.214844 11.76953,3.689453 -13.52539,-1.75586 -4.2168,5.269532 17.91797,1.755859 -21.25391,0.351563 -1.75781,4.917968 26.87696,4.919922 -28.98438,-2.810547 -3.51367,5.445313 8.95898,3.33789 -10.36328,-0.527343 -6.14844,5.621091 36.18555,6.67383 -39.34766,-4.74219 -3.68945,7.37891 7.37891,2.63477 -13.17578,0.87695 1.23047,2.81055 32.49609,4.04101 -34.25391,-1.58008 -2.81054,7.02539 18.97265,-0.17578 -24.59375,3.16211 -2.10742,5.62109 33.02539,0.52735 -35.48437,1.75586 c -1.75663,5.73829 -2.5761,8.60742 -2.45899,8.60742 l 26.67774,0.35352 0.33593,-0.19727 87.6836,1.29297 0.01,0.0723 17.74219,0.23633 4.39063,-3.86523 -50.94141,-4.91797 45.14453,2.81055 -0.17578,-7.73047 -46.90039,-4.21485 44.26562,1.93164 -4.03906,-7.90429 -18.62109,-0.35156 18.62109,-2.28321 -5.97266,-4.74219 -54.98242,-0.8789 50.58985,-1.23047 -2.63477,-7.55273 -12.64648,-1.75782 8.95703,-1.22851 0.35156,-8.080081 -20.02539,1.580078 16.86328,-3.337891 3.16211,-7.552734 -20.72656,3.689453 20.375,-6.5 0.17578,-9.662109 -4.56641,1.40625 5.79688,-11.769532 -4.56641,-0.351562 -3.33789,6.324219 0.87695,-6.851563 -5.26953,1.054688 c -1.6395,10.188402 -2.45898,15.633289 -2.45898,16.335937 0,0.702649 0.11734,-5.211623 0.35156,-17.742187 l -7.9043,1.230468 3.16211,12.822266 -9.83789,3.162109 7.37696,-4.742187 -1.93164,-1.931641 -5.09375,0.525391 5.09375,-2.634766 -4.03907,-3.162109 -8.60742,5.271484 9.13281,-9.134765 -5.09375,-1.40625 -3.33789,2.986328 1.23047,-5.269532 z"
        />
        <motion.path
          id="smoke"
          fill="hsl(var(--nextui-primary-300))"
          style={{ x: moveX1, y: moveY1 }}
          d="M 250.76367,27.636719 243.49805,27.75 c -2.39925,3.498145 -3.82952,5.648067 -4.30664,6.472656 0.22063,-0.731726 0.5951,-2.504235 1.12695,-5.33789 l -4.54102,-0.681641 -8.44726,5.519531 5.67773,3.333985 -4.1582,0.230468 -1.92969,3.292969 4.65625,1.363281 -3.29297,2.269532 2.49805,3.861328 8.85547,-7.949219 -9.42383,13.058594 6.47266,2.724609 3.97265,-4.201172 -0.5664,3.519531 6.8125,0.341797 -1.58985,-6.585937 3.85938,6.017578 3.0664,-4.65625 -3.86132,-4.880859 3.52148,0.453125 -1.13672,-4.882813 -6.4707,0.681641 8.96875,-5.109375 -0.45313,-5.791016 -5.56445,1.589844 z"
        />
        <motion.path
          id="window"
          fill="hsl(var(--nextui-secondary-500))"
          style={{ x: moveX2, y: moveY2 }}
          d="m 213.38086,196.13477 -25.15625,2.20898 v 6.33594 l 12.48242,0.76953 -11.90625,0.86328 -0.10742,1.4668 -0.0645,0.89453 -0.11524,1.57617 8.25586,0.57617 -9.79297,0.38281 0.96094,2.4961 h 12.86523 l -12.00195,1.4414 -0.67187,3.07227 h 5.37695 l -5.76172,1.34375 0.76953,2.88086 25.25195,-0.19141 v -2.11328 l -4.70507,-0.76758 4.60742,-0.57617 -0.19141,-4.0332 -8.06445,-0.19141 8.44922,-0.86523 -0.0957,-4.03125 -9.89062,-0.76953 8.81055,-0.69141 0.98242,-0.0762 0.0117,-0.10938 0.27734,-2.38672 -3.36133,-0.86328 3.36133,-0.57617 0.0957,-2.68945 -12.28906,-1.15235 8.42578,-0.33984 3.47852,-0.14062 -0.0488,-0.63868 z"
        />
        <motion.path
          id="door"
          fill="hsl(var(--nextui-secondary-200))"
          style={{ x: moveX3, y: moveY3 }}
          d="m 224.10156,182.54492 -47.77929,1.10156 -0.10547,2.41211 -0.0703,1.59961 -0.26562,6.11719 14.3125,3.52344 -12.77149,0.21875 -1.32031,10.1289 12.5918,0.13282 0.10742,-1.4668 11.90625,-0.86328 -12.48242,-0.76953 v -6.33594 l 25.15625,-2.20898 0.23828,3.10546 10.48242,-2.38281 0.40625,-5.26758 0.0352,-0.45703 c -1.74228,0.14386 -3.05046,0.24464 -4.61524,0.3711 -6.33699,0.51212 -11.34013,0.8944 -14.76562,1.12109 -0.11561,0.008 -0.17661,0.0101 -0.28906,0.0176 -3.28912,0.21465 -5.42545,0.31589 -5.87305,0.25195 -0.77064,-0.11009 5.6147,-1.32049 12.30273,-2.50391 6.68804,-1.18341 13.67878,-2.33984 14.11914,-2.33984 0.14679,0 0.22963,-0.11427 0.24805,-0.34375 0.0184,-0.22948 -0.0267,-0.57433 -0.13672,-1.0332 -0.21998,-0.91775 -0.69769,-2.29405 -1.43164,-4.12891 z m 0.44141,17.39453 -14.97266,0.22071 0.61914,-0.14063 -8.42578,0.33984 12.28906,1.15235 -0.0957,2.68945 -3.36133,0.57617 3.36133,0.86328 -0.27734,2.38672 10.64258,-0.38086 z m -11.85742,8.27344 -8.81055,0.69141 9.89062,0.76953 0.0957,4.03125 -8.44922,0.86523 8.06445,0.19141 0.19141,4.0332 -4.60742,0.57617 4.70507,0.76758 v 2.11328 l -25.25195,0.19141 -0.76953,-2.88086 5.76172,-1.34375 h -5.37695 l 0.67187,-3.07227 12.00195,-1.4414 H 187.9375 l -0.96094,-2.4961 9.79297,-0.38281 -8.25586,-0.57617 0.11524,-1.57617 -14.50977,1.39453 2.20313,6.82617 10.34765,2.86133 -9.9082,1.54297 v 9.46679 c 13.65133,-0.29356 20.77026,-0.43945 21.35742,-0.43945 0.58716,0 -6.53176,1.027 -21.35742,3.08203 l -0.66016,10.34766 20.69727,0.44141 -18.71485,3.30273 -1.54296,9.46875 23.56054,0.43945 -23.56054,3.52344 c 0.2202,1.90825 0.36775,3.33888 0.4414,4.29297 0.0737,0.95409 0.0734,1.43164 0,1.43164 -0.0995,0 1.49465,0.75361 3.83008,1.83594 0.0202,0.009 0.0129,0.006 0.0332,0.0156 0.0295,0.0137 0.0677,0.0311 0.0977,0.0449 1.08091,0.50056 1.94351,0.90381 3.52539,1.62696 l -9.24805,0.21875 1.32032,5.28515 46.24023,1.32032 1.06836,-4.06836 h 0.002 l 0.0293,-0.11524 -0.32227,-0.0469 -21.03515,-3.03516 21.57812,0.44141 -0.43945,-6.38672 -12.77149,-2.20117 13.65235,-0.22071 -0.88086,-9.24804 -21.79883,-1.09961 19.37695,-1.32227 2.64063,-11.22851 -15.41211,-3.08204 15.41211,-1.54296 -0.21875,-9.6875 -27.74414,-0.22071 26.64258,-1.98047 1.54101,-11.66992 z"
        />
        <motion.path
          id="house"
          fill="hsl(var(--nextui-content1-100))"
          style={{ x: moveX4, y: moveY4 }}
          d="m 159.05859,147.96875 -7.32422,4.31055 0.21485,8.61718 8.1875,-3.8789 -6.89453,7.97265 -0.86133,9.04688 31.88476,-14.64844 -28.86914,17.23438 -2.36914,15.08007 23.18946,-5.64453 0.10547,-2.41211 47.77929,-1.10156 c 1.46789,3.66971 1.90747,5.50586 1.32031,5.50586 -0.88072,0 -27.96316,4.62357 -26.42187,4.84375 0.91563,0.13081 8.12262,-0.35579 20.92773,-1.39062 l 27.2461,-3.24805 -1.29297,-7.10938 -37.48633,-6.03125 35.54688,3.23047 2.36914,-7.75586 -21.54297,0.2168 20.89648,-3.01758 1.72461,-6.03125 -37.48633,1.07617 38.13282,-4.52343 -1.29297,-9.04883 z m 17.08789,39.68945 -23.11914,9.43164 1.07618,10.77149 15.72656,0.21484 -17.44922,2.80078 0.86133,13.78907 7.9707,0.86132 -8.61719,2.58594 0.64649,4.52344 13.35742,3.23242 -14.00391,0.42969 0.86133,10.55664 18.95899,4.09375 -18.95899,-1.07813 -1.29297,10.77344 13.57422,-0.2168 -13.14258,3.66407 -1.29297,8.18554 29.54297,-3.76953 c -2.36894,-1.0976 -3.96362,-1.85156 -3.86328,-1.85156 0.14679,0 -10e-4,-1.90811 -0.4414,-5.72461 l 23.56054,-3.52344 -23.56054,-0.43945 1.54296,-9.46875 18.71485,-3.30273 -20.69727,-0.44141 0.66016,-10.34766 c 14.82565,-2.05503 21.94458,-3.08203 21.35742,-3.08203 -0.58716,0 -7.70608,0.14589 -21.35742,0.43945 v -9.46679 l 9.9082,-1.54297 -10.34765,-2.86133 -2.20313,-6.82617 14.50977,-1.39453 0.0645,-0.89453 -12.5918,-0.13282 1.32031,-10.1289 12.77149,-0.21875 -14.3125,-3.52344 z m 73.61133,2.53711 -25.25,1.39453 -0.40625,5.26758 -10.48242,2.38281 0.0488,0.63868 -3.47852,0.14062 -0.61914,0.14063 14.97266,-0.22071 -0.2207,7.70703 -10.64258,0.38086 -0.0117,0.10938 -0.98242,0.0762 11.41601,2.07617 -1.54101,11.66992 -26.64258,1.98047 27.74414,0.22071 0.21875,9.6875 -15.41211,1.54296 15.41211,3.08204 -2.64063,11.22851 -19.37695,1.32227 21.79883,1.09961 0.88086,9.24804 -13.65235,0.22071 12.77149,2.20117 0.43945,6.38672 -21.57812,-0.44141 21.03515,3.03516 24.04493,-5.23633 v -6.46289 l -9.91016,-4.0918 10.3418,1.07617 -1.93946,-10.34179 c -18.09675,2.01074 -26.71331,2.9444 -25.85156,2.80078 0.86175,-0.14363 9.12026,-2.29777 24.77539,-6.46289 l 2.80078,-7.75586 -20.03711,-0.42969 18.95899,-3.01758 -1.07813,-9.47851 -22.83594,-0.64649 24.34571,-2.36914 1.29101,-8.40234 -21.32812,-1.93946 20.68359,-0.86132 -0.43164,-8.1875 -10.125,-1.72266 10.98633,-1.72461 z m -68.81445,78.35742 -29.64063,6.09375 0.43164,4.95508 95.43946,-0.86133 1.07617,-9.26367 -24.40039,3.45899 -1.06836,4.06836 -46.24023,-1.32032 -1.32032,-5.28515 9.24805,-0.21875 c -1.58188,-0.72315 -2.44448,-1.1264 -3.52539,-1.62696 z"
        />
        <motion.path
          id="treetrunk"
          fill="hsl(var(--nextui-content1-100))"
          style={{ x: moveX1, y: moveY1 }}
          d="m 78.927734,177.45898 -10.017578,13.05469 -1.808594,8.67969 11.933594,-2.5332 -10.30664,4.33984 1.447265,6.33008 10.125,-1.8086 -10.667969,4.88086 -0.18164,5.42578 6.871094,1.62696 -4.88086,1.26562 -1.808594,4.52149 9.222657,7.41211 -10.488282,-3.25391 1.988282,5.9668 6.148437,1.80859 -6.689453,1.44531 0.722656,6.33008 5.605469,1.26563 -7.414062,2.53125 1.808593,5.42382 4.882813,3.07422 -5.244141,1.08594 -2.71289,5.42383 7.052734,0.54297 -9.222656,2.34961 -6.689453,4.16015 5.966796,1.98828 -11.029296,1.08399 0.361328,5.60547 9.220703,-1.80664 -5.0625,3.61523 7.955078,4.70117 1.628906,-4.70117 1.988281,4.70117 11.933594,1.08594 -6.328125,-5.24414 15.369141,5.60547 7.957031,-3.43555 -11.392578,-3.61719 h 9.222656 l -0.361328,-7.05078 -19.347656,5.24219 20.974609,-7.77344 -5.0625,-4.70117 c -10.125788,3.7369 -15.552121,5.60352 -16.27539,5.60352 -0.723272,0 3.979681,-2.77133 14.105468,-8.31641 l -1.085937,-3.25586 -7.59375,1.08594 8.859375,-4.70117 -0.541016,-7.05274 -6.330078,1.26563 5.425781,-4.33985 1.445313,-6.50781 -10.486328,1.26563 12.65625,-3.79883 -2.34961,-5.60547 -4.701172,-0.90234 4.88086,-2.16993 -0.361328,-6.50976 -5.423828,0.54297 5.24414,-3.07422 1.445313,-5.60547 -11.029297,0.9043 18.986328,-4.52149 0.72266,-4.1582 16.45507,2.53125 -0.36132,-5.0625 5.60351,7.95508 3.79883,-2.53125 -7.95703,-7.77539 -22.421876,1.08593 -8.677735,4.15821 2.710938,-3.97852 -0.179688,-5.9668 -6.691406,4.88282 7.595703,-9.76563 -0.07031,-1.56054 -0.242188,0.16992 -3.0625,-4.75391 c -2.882422,1.96885 -4.661704,3.41934 -5.304687,4.33789 -0.773936,1.10563 0.729436,-1.26354 4.011718,-6.34375 l -0.152343,-0.23633 0.710937,-0.97461 -0.458984,-0.49023 -3.050781,3.95117 z"
        />
        <motion.path
          id="treetop"
          fill="hsl(var(--nextui-content1-200))"
          style={{ x: moveX2, y: moveY2 }}
          d="m 76.070312,114.38281 -9.173828,0.6211 -15.705078,18.19336 c 2.384289,-4.4576 3.576172,-6.79072 3.576172,-6.99805 0,-0.20733 -2.072162,-0.776 -6.21875,-1.70899 -9.640816,6.73822 -14.513522,10.15806 -14.617187,10.26172 l 1.24414,12.75 3.886719,-0.77734 -3.419922,3.11133 3.730469,1.24414 -12.439453,8.39648 c -1.243977,4.76859 -1.865235,7.36073 -1.865235,7.77539 0,0.41466 5.18236,-1.76266 15.548828,-6.53125 -10.366468,6.32356 -15.601412,9.58762 -15.705078,9.79492 -0.103665,0.20733 1.711429,1.96986 5.44336,5.28711 l 5.908203,-4.82031 -3.421875,6.99805 6.998047,-1.08789 10.574218,-18.03906 -6.53125,13.68359 1.244141,9.48633 10.263672,-23.48047 -10.263672,28.76758 4.042969,4.04297 8.863281,-14.77344 c -5.494228,11.50678 -8.29282,17.31235 -8.396484,17.41601 -0.103665,0.10367 2.642342,0.10367 8.240234,0 l 9.953125,-11.97265 c -2.798946,5.80521 -4.405655,8.86283 -4.820312,9.17383 -0.41466,0.31099 2.228129,-1.39895 7.929687,-5.13086 l 13.0625,-23.32422 -6.064453,12.90625 4.509766,8.24023 17.414062,-22.54687 -14.615234,20.06054 4.507812,6.9961 6.84375,-4.82032 -3.111328,7.46485 10.574222,-5.44336 13.99414,-26.58984 -4.82031,12.75 h 6.6875 l 8.86328,-20.5254 -5.59766,-3.10937 -11.19727,8.08594 7.61915,-8.24219 -6.21875,-3.41992 -8.86329,7.77539 11.66211,-20.21485 -2.64257,-10.57421 -11.81836,22.70312 8.39648,-21.45898 -6.06445,-5.28711 -6.531253,15.23828 4.199223,-17.57031 -7.931645,5.13086 -21.769531,39.18554 12.285156,-25.8125 -1.087891,-10.26367 -6.220703,7.77539 3.732422,-9.48633 -3.421875,-3.41992 c -7.360195,10.98846 -11.609688,17.10368 -12.75,18.34766 -1.140311,1.24398 2.694362,-6.16634 11.505859,-22.23438 z"
        />
        <motion.path
          d="M4.926059,5.073938c0,0,0,290,0,290s290,0,290,0s0-290,0-290-290,0-290,0Z"
          strokeWidth={6}
          stroke="gold"
          strokeLinejoin="bevel"
          fill="none"
          id="border"
        />
      </svg>
    </motion.div>
  );
};

export default ArtSVG;
