import React, { useRef, useEffect } from "react";
import { gsap } from "gsap-trial";
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";

// Register the MorphSVGPlugin with GSAP
gsap.registerPlugin(MorphSVGPlugin);

interface SvgMorphProps {
  indexOfSvgs: number | null; // Index of the path to morph to
}

const SvgMorph = ({ indexOfSvgs }: SvgMorphProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  // Array containing SVG path data
  const paths = [
    "m 160.44897,25.865736 c 6.72747,-3.894855 18.83693,-9.489283 23.08607,-9.824098 3.46976,-0.514972 10.52887,3.061878 12.19381,3.454383 -1.57864,0.384212 -24.76241,3.851508 -35.27988,6.369715 z M 49.751362,148.15985 C 38.416791,136.75691 23.07795,121.79453 23.939123,113.82721 25.603088,107.39508 32.777867,101.18257 50.679908,89.769804 27.524997,112.47781 43.460181,130.77465 49.751362,148.15985 Z M 269.30742,53.914216 c 7.36686,0.900542 15.3203,6.751126 14.90193,9.868996 -0.43053,3.129531 -2.70642,7.15395 -7.30747,11.95822 4.81523,-11.0608 0.49334,-17.56793 -7.59446,-21.827216 z M 199.23986,248.4156 c -9.64082,16.05399 -16.07356,25.16546 -21.41521,25.85365 -5.99316,0.2523 -19.01078,-10.36523 -33.33049,-21.09805 17.34719,8.18474 37.0023,11.7799 54.7457,-4.7556 z M 61.17018,99.61928 c 22.306568,3.86315 30.213587,9.73085 35.84813,19.77828 4.44023,7.91775 -11.324125,17.38589 -1.97151,23.63546 10.26375,6.8584 32.3607,-10.88723 40.91,-4.47526 9.62597,7.21948 -16.34639,22.05016 -9.88914,30.28549 8.01265,10.21903 27.20168,9.45514 34.61198,17.92406 4.16055,4.75491 -1.0647,12.86391 5.56264,17.30599 4.01949,2.69413 13.22613,-1.63832 14.21564,1.23614 0.91598,2.66085 -4.53946,2.62926 -4.52553,4.89473 0.008,1.35252 2.20163,3.74522 18.74117,4.37634 -2.73845,0.63048 -19.94403,2.21074 -20.56489,-4.01176 -0.37634,-3.77183 4.81987,-3.90171 4.63039,-4.54595 -0.18948,-0.64424 -9.35919,2.52259 -13.60376,-0.34367 -6.88924,-4.65215 -2.61633,-14.44026 -5.85731,-17.80172 -7.22517,-7.49378 -25.56149,-7.07031 -34.58144,-17.65711 -8.16852,-9.58746 17.45657,-24.68869 10.21317,-30.09442 -7.24341,-5.40574 -31.02452,11.92854 -41.28024,4.29929 C 83.373759,136.79591 99.062185,126.3425 95.378788,120.2063 88.927649,109.45929 83.524192,107.11233 61.17018,99.61928 Z m 36.4662,-22.86863 c 2.90845,-1.660106 8.87449,-1.665085 11.12528,0.61807 3.98578,4.043083 -7.04381,10.541258 3.09036,16.68792 8.93169,5.417322 20.64048,-0.60395 26.57706,6.18071 6.30714,7.20815 4.75139,20.26756 12.36142,25.34092 8.05882,5.37254 18.23703,-7.0476 23.4867,-4.3265 5.29543,2.74481 0.7042,13.06563 3.70843,16.06985 2.14369,2.14369 7.53227,0.67817 9.88914,3.70843 1.53877,1.97842 0.0189,5.22588 1.23614,7.41685 0.58341,1.05014 1.90816,1.71186 3.0974,1.88175 10.63781,1.51969 15.60229,3.95573 22.24352,12.95195 -7.56387,-8.03514 -12.26064,-10.30103 -22.85036,-11.13142 -1.26875,-0.0995 -3.23999,-0.95192 -4.11703,-2.75215 -1.48437,-3.04688 0.12355,-5.81033 -1.12741,-7.42922 -2.06041,-2.24437 -6.47216,-0.63543 -9.52939,-3.27458 -4.30478,-3.71609 0.91983,-13.72378 -3.31137,-15.82098 -4.37104,-2.16652 -14.92026,10.26323 -23.69468,4.30478 -8.84265,-6.00479 -6.52384,-18.51561 -12.91535,-25.75562 -5.39414,-6.110234 -16.57496,-0.0533 -26.15237,-5.932483 -10.938092,-6.714472 -0.44181,-14.11133 -3.38039,-16.921216 -1.92147,-1.837318 -7.03812,-2.513615 -9.7371,-1.817061 z m 41.41076,-21.01442 c 4.77659,-1.92037 17.67957,0.116797 21.63249,3.70843 3.36271,3.055371 -2.41141,11.967995 2.47228,15.45178 5.62828,4.014938 38.00832,12.304853 40.17463,16.68792 1.85754,3.758348 -1.36479,7.277897 0.81295,10.2917 2.62285,3.62982 15.13933,1.54257 32.56289,18.13957 -21.682,-15.80099 -30.54189,-12.5255 -34.11299,-17.11351 -3.02758,-3.889705 0.6228,-7.665201 -0.96555,-10.442027 -2.08689,-3.648404 -35.2228,-12.617822 -39.83904,-16.374732 -5.45676,-4.440955 0.10688,-13.113635 -2.36044,-15.511456 -3.42023,-3.323883 -14.78007,-4.911795 -20.37722,-4.837675 z m 34.61199,-12.979492 c 4.96473,-2.526798 12.8704,-3.21757 14.21563,1.236142 1.8206,6.027557 -5.58775,6.113627 -4.4014,9.504556 1.28411,3.670322 15.96083,0.309309 19.85318,2.856864 1.98497,1.299169 2.23647,3.816993 3.70843,4.94457 1.64603,1.260925 19.99143,2.93407 24.72285,5.56264 3.8402,2.13344 4.35122,7.783144 7.41685,10.50721 4.71198,4.186986 7.46583,-1.392532 11.74335,8.653 -6.65582,-8.373658 -6.75001,-2.816445 -12.7476,-7.361243 -3.495,-2.648405 -3.94854,-8.335723 -7.35541,-10.281475 -4.88241,-2.788481 -21.98397,-3.728216 -24.86034,-5.614718 -2.07083,-1.358176 -1.8073,-3.705709 -3.69257,-4.783008 -3.93101,-2.246294 -18.96174,1.018042 -20.40283,-3.64432 -1.71871,-5.560504 5.6953,-4.987604 4.381,-9.570807 -0.9318,-3.249341 -5.64916,-2.70621 -12.58114,-2.009411 z m 6.34088,-32.756735 C 168.49387,12.140881 11.688957,100.60715 10.000003,110.00001 c -1.688954,9.39285 151.084457,189.38022 170.000007,180 18.91555,-9.38022 114.27379,-221.085793 110,-230.000007 -4.2738,-8.914214 -98.49387,-52.140878 -110,-50 z",
    "m 247.72654,34.440615 c 0,0 30.98984,10.793014 30.98984,10.793014 0,0 -0.94866,27.709503 -6.87443,45.801186 -0.5999,-0.0072 -1.39975,-0.01676 -1.99964,-0.02394 6.27481,-20.045948 6.85703,-44.433842 6.85703,-44.433842 0,0 -32.53891,-11.225923 -32.53891,-11.225923 0,0 3.56611,-0.91049 3.56611,-0.91049 z M 87.010551,23.618662 C 77.870749,23.027223 38.899242,35.219597 32.464008,51.543087 26.028774,67.866577 39.974051,79.561603 45.70662,86.195671 42.088851,78.023567 27.669765,68.410843 34.43157,51.938415 41.193375,35.465987 78.661367,25.399078 87.010551,23.618662 Z m -19.838809,121.419588 58.577298,-5.81943 -2.2317,20.58118 -2.14774,2.73279 2.28369,-21.17605 -56.295449,5.58187 z m 173.049208,60.40418 c 0,0 14.65039,9.60975 26.44686,17.80934 -26.40234,2.49331 -44.03358,10.73012 -59.08247,17.23053 0.37399,-0.81478 0.48975,-1.24665 1.24665,-2.71592 15.4496,-6.54493 32.13468,-12.86748 52.71564,-15.67222 -8.81845,-5.89932 -19.54575,-13.17891 -19.54575,-13.17891 q -1.78093,-3.47282 -1.78093,-3.47282 z M 222.19467,15.769296 c 19.3626,7.094414 43.89483,18.972855 64.95791,23.474888 2.41181,17.364986 -2.36357,46.933697 -3.37652,67.048136 -13.95286,10.21923 -26.51271,14.70584 -41.62668,34.32184 -10.46762,-5.86652 -34.99963,2.74341 -57.0854,-29.39927 1.31943,-18.041378 -0.47387,-42.912592 -1.92495,-61.292864 7.29619,-10.648496 39.05564,-34.15273 39.05564,-34.15273 z M 81.528032,13.095636 c 22.883038,-0.431399 61.877978,2.376919 69.840738,14.975139 4.68748,7.416268 13.31082,35.423384 4.39985,53.484701 -7.6522,15.50996 -40.06909,25.853474 -62.24309,29.439004 -11.8456,1.91543 -28.264028,1.73636 -62.510771,-16.920914 C 11.61968,83.50733 14.626465,56.586352 27.643043,40.557075 34.939233,29.908579 58.644994,13.527035 81.528032,13.095636 Z M 169.35372,123.24908 c 0,0 100.08394,84.68338 113.48411,102.278 -64.62262,5.42239 -114.62651,59.35713 -114.62651,59.35713 -7.47876,-40.99241 6.28532,-118.55185 1.1424,-161.63513 z m -34.89357,7.77013 c -4.46033,17.90753 -12.12924,123.79313 -13.14219,143.90757 0,0 -43.653728,-18.36451 -85.329493,-19.31075 -9.147831,-28.05578 -2.824864,-99.33646 -4.275944,-117.71673 33.376933,1.03362 80.342777,-15.08481 102.747627,-6.88009 z M 5.783386,6.316546 C 8.556054,25.791551 0.611282,244.77831 4.923248,294.55913 92.767235,292.97481 225.70485,289.26739 296.67552,295.09334 292.9681,200.81886 296.1068,14.760791 290.62889,5.911864 205.9291,-3.39265 57.733632,8.395626 5.783386,6.316546 Z",
    "M 4.9995421,5 V 295 H 294.99954 V 5 Z M 227.65579,152.28125 v 9.42969 h 26.26563 v 67.86718 h 7.97851 v -77.29687 z m -55.91211,-9.61914 v 142.91601 h 99.15821 V 142.66211 Z m 55.91211,9.61914 h 34.24414 v 77.29687 h -7.97851 V 161.71094 H 227.65579 Z M 79.73587,45.484375 c -15.06776,0 -42.572091,14.829672 -42.09375,45.921875 0.478342,31.0922 27.02601,45.6811 39.462891,46.87695 -14.828589,-10.76268 -20.328125,-33.96119 -20.328125,-48.072263 0,-14.111076 7.173711,-35.877243 22.958984,-44.726562 z m 3.638672,-8.849609 c -30.40242,0 -55.048828,24.646408 -55.048828,55.048828 0,30.402416 24.646408,55.048826 55.048828,55.048826 30.402418,0 55.048828,-24.64641 55.048828,-55.048826 0,-30.40242 -24.64641,-55.048828 -55.048828,-55.048828 z m -3.638672,8.849609 c -15.785257,8.84931 -22.958984,30.6155 -22.958984,44.726562 0,14.111063 5.499551,37.309593 20.328125,48.072263 C 64.668143,137.08735 38.120461,122.49842 37.64212,91.40625 37.163779,60.314078 64.668125,45.484375 79.73587,45.484375 Z m 143.64258,-16.267578 -24.63086,32.289062 3.89258,7.328125 19.50195,-26.240234 23.54688,43.8125 8.8789,-0.002 z m 1.13476,-14.626953 -90.44336,119.412106 153.09961,-1.39062 z M 58.688995,174.68555 66.27298,190.81836 h 33.376953 l 14.605467,26.29883 h 18.57813 L 108.689,174.68555 Z m 57.343755,-9.57032 -66.349614,0.48829 -32.751953,57.70703 33.597656,57.21484 66.351561,-0.48828 32.75195,-57.70508 z",
    "m 247.72654,34.440615 c 0,0 30.98984,10.793014 30.98984,10.793014 0,0 -0.94866,27.709503 -6.87443,45.801186 -0.5999,-0.0072 -1.39975,-0.01676 -1.99964,-0.02394 6.27481,-20.045948 6.85703,-44.433842 6.85703,-44.433842 0,0 -32.53891,-11.225923 -32.53891,-11.225923 0,0 3.56611,-0.91049 3.56611,-0.91049 z M 87.010551,23.618662 C 77.870749,23.027223 38.899242,35.219597 32.464008,51.543087 26.028774,67.866577 39.974051,79.561603 45.70662,86.195671 42.088851,78.023567 27.669765,68.410843 34.43157,51.938415 41.193375,35.465987 78.661367,25.399078 87.010551,23.618662 Z m -19.838809,121.419588 58.577298,-5.81943 -2.2317,20.58118 -2.14774,2.73279 2.28369,-21.17605 -56.295449,5.58187 z m 173.049208,60.40418 c 0,0 14.65039,9.60975 26.44686,17.80934 -26.40234,2.49331 -44.03358,10.73012 -59.08247,17.23053 0.37399,-0.81478 0.48975,-1.24665 1.24665,-2.71592 15.4496,-6.54493 32.13468,-12.86748 52.71564,-15.67222 -8.81845,-5.89932 -19.54575,-13.17891 -19.54575,-13.17891 q -1.78093,-3.47282 -1.78093,-3.47282 z M 222.19467,15.769296 c 19.3626,7.094414 43.89483,18.972855 64.95791,23.474888 2.41181,17.364986 -2.36357,46.933697 -3.37652,67.048136 -13.95286,10.21923 -26.51271,14.70584 -41.62668,34.32184 -10.46762,-5.86652 -34.99963,2.74341 -57.0854,-29.39927 1.31943,-18.041378 -0.47387,-42.912592 -1.92495,-61.292864 7.29619,-10.648496 39.05564,-34.15273 39.05564,-34.15273 z M 81.528032,13.095636 c 22.883038,-0.431399 61.877978,2.376919 69.840738,14.975139 4.68748,7.416268 13.31082,35.423384 4.39985,53.484701 -7.6522,15.50996 -40.06909,25.853474 -62.24309,29.439004 -11.8456,1.91543 -28.264028,1.73636 -62.510771,-16.920914 C 11.61968,83.50733 14.626465,56.586352 27.643043,40.557075 34.939233,29.908579 58.644994,13.527035 81.528032,13.095636 Z M 169.35372,123.24908 c 0,0 100.08394,84.68338 113.48411,102.278 -64.62262,5.42239 -114.62651,59.35713 -114.62651,59.35713 -7.47876,-40.99241 6.28532,-118.55185 1.1424,-161.63513 z m -34.89357,7.77013 c -4.46033,17.90753 -12.12924,123.79313 -13.14219,143.90757 0,0 -43.653728,-18.36451 -85.329493,-19.31075 -9.147831,-28.05578 -2.824864,-99.33646 -4.275944,-117.71673 33.376933,1.03362 80.342777,-15.08481 102.747627,-6.88009 z M 5.783386,6.316546 C 8.556054,25.791551 0.611282,244.77831 4.923248,294.55913 92.767235,292.97481 225.70485,289.26739 296.67552,295.09334 292.9681,200.81886 296.1068,14.760791 290.62889,5.911864 205.9291,-3.39265 57.733632,8.395626 5.783386,6.316546 Z",
    "m 160.44897,25.865736 c 6.72747,-3.894855 18.83693,-9.489283 23.08607,-9.824098 3.46976,-0.514972 10.52887,3.061878 12.19381,3.454383 -1.57864,0.384212 -24.76241,3.851508 -35.27988,6.369715 z M 49.751362,148.15985 C 38.416791,136.75691 23.07795,121.79453 23.939123,113.82721 25.603088,107.39508 32.777867,101.18257 50.679908,89.769804 27.524997,112.47781 43.460181,130.77465 49.751362,148.15985 Z M 269.30742,53.914216 c 7.36686,0.900542 15.3203,6.751126 14.90193,9.868996 -0.43053,3.129531 -2.70642,7.15395 -7.30747,11.95822 4.81523,-11.0608 0.49334,-17.56793 -7.59446,-21.827216 z M 199.23986,248.4156 c -9.64082,16.05399 -16.07356,25.16546 -21.41521,25.85365 -5.99316,0.2523 -19.01078,-10.36523 -33.33049,-21.09805 17.34719,8.18474 37.0023,11.7799 54.7457,-4.7556 z M 61.17018,99.61928 c 22.306568,3.86315 30.213587,9.73085 35.84813,19.77828 4.44023,7.91775 -11.324125,17.38589 -1.97151,23.63546 10.26375,6.8584 32.3607,-10.88723 40.91,-4.47526 9.62597,7.21948 -16.34639,22.05016 -9.88914,30.28549 8.01265,10.21903 27.20168,9.45514 34.61198,17.92406 4.16055,4.75491 -1.0647,12.86391 5.56264,17.30599 4.01949,2.69413 13.22613,-1.63832 14.21564,1.23614 0.91598,2.66085 -4.53946,2.62926 -4.52553,4.89473 0.008,1.35252 2.20163,3.74522 18.74117,4.37634 -2.73845,0.63048 -19.94403,2.21074 -20.56489,-4.01176 -0.37634,-3.77183 4.81987,-3.90171 4.63039,-4.54595 -0.18948,-0.64424 -9.35919,2.52259 -13.60376,-0.34367 -6.88924,-4.65215 -2.61633,-14.44026 -5.85731,-17.80172 -7.22517,-7.49378 -25.56149,-7.07031 -34.58144,-17.65711 -8.16852,-9.58746 17.45657,-24.68869 10.21317,-30.09442 -7.24341,-5.40574 -31.02452,11.92854 -41.28024,4.29929 C 83.373759,136.79591 99.062185,126.3425 95.378788,120.2063 88.927649,109.45929 83.524192,107.11233 61.17018,99.61928 Z m 36.4662,-22.86863 c 2.90845,-1.660106 8.87449,-1.665085 11.12528,0.61807 3.98578,4.043083 -7.04381,10.541258 3.09036,16.68792 8.93169,5.417322 20.64048,-0.60395 26.57706,6.18071 6.30714,7.20815 4.75139,20.26756 12.36142,25.34092 8.05882,5.37254 18.23703,-7.0476 23.4867,-4.3265 5.29543,2.74481 0.7042,13.06563 3.70843,16.06985 2.14369,2.14369 7.53227,0.67817 9.88914,3.70843 1.53877,1.97842 0.0189,5.22588 1.23614,7.41685 0.58341,1.05014 1.90816,1.71186 3.0974,1.88175 10.63781,1.51969 15.60229,3.95573 22.24352,12.95195 -7.56387,-8.03514 -12.26064,-10.30103 -22.85036,-11.13142 -1.26875,-0.0995 -3.23999,-0.95192 -4.11703,-2.75215 -1.48437,-3.04688 0.12355,-5.81033 -1.12741,-7.42922 -2.06041,-2.24437 -6.47216,-0.63543 -9.52939,-3.27458 -4.30478,-3.71609 0.91983,-13.72378 -3.31137,-15.82098 -4.37104,-2.16652 -14.92026,10.26323 -23.69468,4.30478 -8.84265,-6.00479 -6.52384,-18.51561 -12.91535,-25.75562 -5.39414,-6.110234 -16.57496,-0.0533 -26.15237,-5.932483 -10.938092,-6.714472 -0.44181,-14.11133 -3.38039,-16.921216 -1.92147,-1.837318 -7.03812,-2.513615 -9.7371,-1.817061 z m 41.41076,-21.01442 c 4.77659,-1.92037 17.67957,0.116797 21.63249,3.70843 3.36271,3.055371 -2.41141,11.967995 2.47228,15.45178 5.62828,4.014938 38.00832,12.304853 40.17463,16.68792 1.85754,3.758348 -1.36479,7.277897 0.81295,10.2917 2.62285,3.62982 15.13933,1.54257 32.56289,18.13957 -21.682,-15.80099 -30.54189,-12.5255 -34.11299,-17.11351 -3.02758,-3.889705 0.6228,-7.665201 -0.96555,-10.442027 -2.08689,-3.648404 -35.2228,-12.617822 -39.83904,-16.374732 -5.45676,-4.440955 0.10688,-13.113635 -2.36044,-15.511456 -3.42023,-3.323883 -14.78007,-4.911795 -20.37722,-4.837675 z m 34.61199,-12.979492 c 4.96473,-2.526798 12.8704,-3.21757 14.21563,1.236142 1.8206,6.027557 -5.58775,6.113627 -4.4014,9.504556 1.28411,3.670322 15.96083,0.309309 19.85318,2.856864 1.98497,1.299169 2.23647,3.816993 3.70843,4.94457 1.64603,1.260925 19.99143,2.93407 24.72285,5.56264 3.8402,2.13344 4.35122,7.783144 7.41685,10.50721 4.71198,4.186986 7.46583,-1.392532 11.74335,8.653 -6.65582,-8.373658 -6.75001,-2.816445 -12.7476,-7.361243 -3.495,-2.648405 -3.94854,-8.335723 -7.35541,-10.281475 -4.88241,-2.788481 -21.98397,-3.728216 -24.86034,-5.614718 -2.07083,-1.358176 -1.8073,-3.705709 -3.69257,-4.783008 -3.93101,-2.246294 -18.96174,1.018042 -20.40283,-3.64432 -1.71871,-5.560504 5.6953,-4.987604 4.381,-9.570807 -0.9318,-3.249341 -5.64916,-2.70621 -12.58114,-2.009411 z m 6.34088,-32.756735 C 168.49387,12.140881 11.688957,100.60715 10.000003,110.00001 c -1.688954,9.39285 151.084457,189.38022 170.000007,180 18.91555,-9.38022 114.27379,-221.085793 110,-230.000007 -4.2738,-8.914214 -98.49387,-52.140878 -110,-50 z",
  ];

  // need to fix the svg so that the shapes dont move. 
  // then on "build" the shapes move into position and take form.
  // on "create" add color or something artsy

  useEffect(() => {
    // Ensure the ref is current and the index is valid
    if (
      indexOfSvgs === null ||
      !pathRef.current ||
      indexOfSvgs < 0 ||
      indexOfSvgs >= paths.length
    ) {
      return;
    }

    // Morph the path using GSAP to the path at indexOfSvgs
    gsap.to(pathRef.current, {
      morphSVG: paths[indexOfSvgs],
      duration: 1,
      ease: "power1.inOut", // Smooth easing
    });
  }, [indexOfSvgs]); // Trigger the effect when the indexOfSvgs prop changes

  return (
    <svg
      id="eWIvQqgxT2c1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      width="100%"
      height="100%"
    >
      <path
        ref={pathRef}
        stroke="hsl(var(--nextui-primary-100))"
        strokeWidth={3}
        fill="none"
        d="m 160.44897,25.865736 c 6.72747,-3.894855 18.83693,-9.489283 23.08607,-9.824098 3.46976,-0.514972 10.52887,3.061878 12.19381,3.454383 -1.57864,0.384212 -24.76241,3.851508 -35.27988,6.369715 z M 49.751362,148.15985 C 38.416791,136.75691 23.07795,121.79453 23.939123,113.82721 25.603088,107.39508 32.777867,101.18257 50.679908,89.769804 27.524997,112.47781 43.460181,130.77465 49.751362,148.15985 Z M 269.30742,53.914216 c 7.36686,0.900542 15.3203,6.751126 14.90193,9.868996 -0.43053,3.129531 -2.70642,7.15395 -7.30747,11.95822 4.81523,-11.0608 0.49334,-17.56793 -7.59446,-21.827216 z M 199.23986,248.4156 c -9.64082,16.05399 -16.07356,25.16546 -21.41521,25.85365 -5.99316,0.2523 -19.01078,-10.36523 -33.33049,-21.09805 17.34719,8.18474 37.0023,11.7799 54.7457,-4.7556 z M 61.17018,99.61928 c 22.306568,3.86315 30.213587,9.73085 35.84813,19.77828 4.44023,7.91775 -11.324125,17.38589 -1.97151,23.63546 10.26375,6.8584 32.3607,-10.88723 40.91,-4.47526 9.62597,7.21948 -16.34639,22.05016 -9.88914,30.28549 8.01265,10.21903 27.20168,9.45514 34.61198,17.92406 4.16055,4.75491 -1.0647,12.86391 5.56264,17.30599 4.01949,2.69413 13.22613,-1.63832 14.21564,1.23614 0.91598,2.66085 -4.53946,2.62926 -4.52553,4.89473 0.008,1.35252 2.20163,3.74522 18.74117,4.37634 -2.73845,0.63048 -19.94403,2.21074 -20.56489,-4.01176 -0.37634,-3.77183 4.81987,-3.90171 4.63039,-4.54595 -0.18948,-0.64424 -9.35919,2.52259 -13.60376,-0.34367 -6.88924,-4.65215 -2.61633,-14.44026 -5.85731,-17.80172 -7.22517,-7.49378 -25.56149,-7.07031 -34.58144,-17.65711 -8.16852,-9.58746 17.45657,-24.68869 10.21317,-30.09442 -7.24341,-5.40574 -31.02452,11.92854 -41.28024,4.29929 C 83.373759,136.79591 99.062185,126.3425 95.378788,120.2063 88.927649,109.45929 83.524192,107.11233 61.17018,99.61928 Z m 36.4662,-22.86863 c 2.90845,-1.660106 8.87449,-1.665085 11.12528,0.61807 3.98578,4.043083 -7.04381,10.541258 3.09036,16.68792 8.93169,5.417322 20.64048,-0.60395 26.57706,6.18071 6.30714,7.20815 4.75139,20.26756 12.36142,25.34092 8.05882,5.37254 18.23703,-7.0476 23.4867,-4.3265 5.29543,2.74481 0.7042,13.06563 3.70843,16.06985 2.14369,2.14369 7.53227,0.67817 9.88914,3.70843 1.53877,1.97842 0.0189,5.22588 1.23614,7.41685 0.58341,1.05014 1.90816,1.71186 3.0974,1.88175 10.63781,1.51969 15.60229,3.95573 22.24352,12.95195 -7.56387,-8.03514 -12.26064,-10.30103 -22.85036,-11.13142 -1.26875,-0.0995 -3.23999,-0.95192 -4.11703,-2.75215 -1.48437,-3.04688 0.12355,-5.81033 -1.12741,-7.42922 -2.06041,-2.24437 -6.47216,-0.63543 -9.52939,-3.27458 -4.30478,-3.71609 0.91983,-13.72378 -3.31137,-15.82098 -4.37104,-2.16652 -14.92026,10.26323 -23.69468,4.30478 -8.84265,-6.00479 -6.52384,-18.51561 -12.91535,-25.75562 -5.39414,-6.110234 -16.57496,-0.0533 -26.15237,-5.932483 -10.938092,-6.714472 -0.44181,-14.11133 -3.38039,-16.921216 -1.92147,-1.837318 -7.03812,-2.513615 -9.7371,-1.817061 z m 41.41076,-21.01442 c 4.77659,-1.92037 17.67957,0.116797 21.63249,3.70843 3.36271,3.055371 -2.41141,11.967995 2.47228,15.45178 5.62828,4.014938 38.00832,12.304853 40.17463,16.68792 1.85754,3.758348 -1.36479,7.277897 0.81295,10.2917 2.62285,3.62982 15.13933,1.54257 32.56289,18.13957 -21.682,-15.80099 -30.54189,-12.5255 -34.11299,-17.11351 -3.02758,-3.889705 0.6228,-7.665201 -0.96555,-10.442027 -2.08689,-3.648404 -35.2228,-12.617822 -39.83904,-16.374732 -5.45676,-4.440955 0.10688,-13.113635 -2.36044,-15.511456 -3.42023,-3.323883 -14.78007,-4.911795 -20.37722,-4.837675 z m 34.61199,-12.979492 c 4.96473,-2.526798 12.8704,-3.21757 14.21563,1.236142 1.8206,6.027557 -5.58775,6.113627 -4.4014,9.504556 1.28411,3.670322 15.96083,0.309309 19.85318,2.856864 1.98497,1.299169 2.23647,3.816993 3.70843,4.94457 1.64603,1.260925 19.99143,2.93407 24.72285,5.56264 3.8402,2.13344 4.35122,7.783144 7.41685,10.50721 4.71198,4.186986 7.46583,-1.392532 11.74335,8.653 -6.65582,-8.373658 -6.75001,-2.816445 -12.7476,-7.361243 -3.495,-2.648405 -3.94854,-8.335723 -7.35541,-10.281475 -4.88241,-2.788481 -21.98397,-3.728216 -24.86034,-5.614718 -2.07083,-1.358176 -1.8073,-3.705709 -3.69257,-4.783008 -3.93101,-2.246294 -18.96174,1.018042 -20.40283,-3.64432 -1.71871,-5.560504 5.6953,-4.987604 4.381,-9.570807 -0.9318,-3.249341 -5.64916,-2.70621 -12.58114,-2.009411 z m 6.34088,-32.756735 C 168.49387,12.140881 11.688957,100.60715 10.000003,110.00001 c -1.688954,9.39285 151.084457,189.38022 170.000007,180 18.91555,-9.38022 114.27379,-221.085793 110,-230.000007 -4.2738,-8.914214 -98.49387,-52.140878 -110,-50 z"
      />
    </svg>
  );
};

export default SvgMorph;
