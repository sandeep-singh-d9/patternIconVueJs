<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="display:none;transform:scale(0.2)" d="M68.83,491.13c-14.32,0-28.63-0.12-42.95,0.09c-3.1,0.05-3.76-0.57-3.76-3.73
	c0.1-128.38,0.09-256.77,0.09-385.15c0-25.59,0.02-51.17-0.03-76.76c0-2.26-0.14-3.48,3.06-3.47c154.27,0.12,308.55,0.13,462.82,0
	c3.68,0,3.08,1.7,3.08,3.9c-0.02,135.24-0.02,270.47-0.02,405.71c-2.36-0.27-2.12-2.33-2.45-3.81c-2.75-12.2-8.9-22.31-18.81-29.93
	c-3.5-2.69-4.88-5.77-4.86-10.12c0.11-24.98,0.06-49.97,0.06-74.95c0-1.52,0.01-3.05-0.01-4.57c-0.08-7.29-1.33-8.59-8.47-8.67
	c-5.33-0.06-10.66,0.03-16-0.03c-6.62-0.08-7.5-0.88-7.5-7.32c-0.04-43.72,0.02-87.44-0.08-131.16c-0.01-4.51,1.48-7.22,5.64-9.29
	c9.27-4.61,13.55-14.47,11.32-24.61c-2.1-9.57-10.46-16.61-20.83-16.71c-26.96-0.25-53.93-0.22-80.89-0.01
	c-9.97,0.08-18,6.63-20.53,15.91c-2.65,9.73,1.06,19.82,10.22,24.61c5.43,2.84,6.59,6.53,6.57,12.07
	c-0.15,42.35-0.08,84.7-0.09,127.05c0,0.76,0.01,1.52-0.01,2.28c-0.14,6.24-0.96,7.12-7.21,7.17c-9.29,0.07-18.59,0.05-27.88,0.01
	c-7.07-0.03-7.88-0.8-7.89-7.89c-0.04-37.02-0.02-74.04-0.02-111.05c0-6.86,0.07-13.71-0.02-20.56c-0.05-3.79,1.42-6.12,4.89-7.88
	c9.87-4.99,14.36-14.71,12.01-25.1c-2.23-9.86-10.83-16.61-21.82-16.66c-26.2-0.13-52.4-0.12-78.61-0.01
	c-11.05,0.05-19.61,6.65-21.94,16.52c-2.41,10.22,1.79,19.73,11.63,24.85c4.03,2.09,5.28,4.86,5.27,9.09
	c-0.06,43.72-0.02,87.44-0.06,131.16c-0.01,6.7-0.86,7.48-7.78,7.53c-8.38,0.06-16.76,0.02-25.14,0.01
	c-9.81-0.01-10.07-0.25-10.07-9.89c-0.01-40.83,0-81.65,0-122.48c0-1.98,0.14-3.97-0.02-5.94c-0.4-4.68,1.45-7.48,5.82-9.62
	c7.79-3.82,11.49-10.58,11.55-19.27c0.06-8.75-3.97-15.13-11.44-19.42c-3.25-1.87-6.83-2.55-10.55-2.56
	c-26.51-0.05-53.01-0.13-79.52,0.04c-10.48,0.07-18.85,6.7-21.26,16.21c-2.58,10.18,1.59,20,11.29,24.99
	c4.17,2.15,5.57,4.89,5.56,9.35c-0.09,43.57-0.04,87.14-0.07,130.71c-0.01,7.03-0.85,7.81-7.93,7.88
	c-5.03,0.05-10.05-0.05-15.08,0.03c-6.55,0.11-8.01,1.54-8.02,8.2c-0.06,25.44-0.02,50.88-0.03,76.32c0,1.83-0.05,3.66-0.02,5.48
	c0.07,3.33-1.4,5.67-4.01,7.73c-23.7,18.65-27.52,50.49-8.87,73.85c7,8.77,16.34,13.95,27.01,17.02
	C65.94,488.77,68.35,488.49,68.83,491.13z"/>
<path :style="{fill:'rgba(0, 110, 170, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M68.83,491.13c-3.29-1-6.65-1.8-9.85-3.03c-18.63-7.19-30.44-20.49-33.92-40.2
	c-3.64-20.62,3.07-37.86,19.46-50.94c3.14-2.5,4.14-4.89,4.12-8.69c-0.15-26.81-0.1-53.61-0.09-80.42c0-7.99,1.69-9.69,9.53-9.72
	c5.64-0.02,11.28-0.23,16.9,0.09c3.73,0.21,4.86-0.84,4.83-4.7c-0.19-21.78-0.08-43.56-0.08-65.34c0-23.15-0.04-46.3,0.06-69.45
	c0.01-2.61-0.69-3.87-3.24-4.95c-10.44-4.42-16.16-15.33-14-26c2.2-10.85,11.93-18.78,23.29-18.8c26.35-0.04,52.7-0.04,79.05,0.02
	c11.74,0.03,21.49,7.95,23.6,18.95c2.13,11.11-3.57,21.62-14.38,26.12c-2.15,0.89-2.89,1.89-2.88,4.26
	c0.09,45.39,0.11,90.78,0.02,136.16c-0.01,3.1,0.99,3.77,3.89,3.73c10.96-0.16,21.93-0.14,32.9-0.02c2.55,0.03,3.38-0.64,3.37-3.29
	c-0.07-45.69-0.07-91.39,0.02-137.08c0-2.31-1.01-3.05-2.82-3.86c-11.05-4.92-16.78-15.66-14.35-26.63
	c2.39-10.75,12.05-18.32,23.66-18.34c26.2-0.04,52.39-0.05,78.59,0c11.75,0.02,21.59,8,23.63,18.93
	c2.08,11.18-3.58,21.64-14.38,26.13c-2.13,0.89-2.9,1.87-2.9,4.25c0.08,45.39,0.1,90.78,0,136.16c-0.01,3.1,0.98,3.78,3.87,3.74
	c10.81-0.16,21.63-0.21,32.44,0.02c3.44,0.07,3.88-1.24,3.88-4.21c-0.09-43.87-0.14-87.73,0.02-131.6c0.02-4.75-0.52-7.63-5.59-10
	c-9.46-4.42-13.9-15.66-11.45-25.5c2.59-10.42,11.79-17.88,22.56-17.92c26.96-0.09,53.92-0.1,80.88,0
	c10.6,0.04,20.39,8.53,22.27,18.86c1.99,10.97-3.41,21.82-13.45,25.8c-3.21,1.27-3.78,2.89-3.77,5.93
	c0.08,44.63,0.09,89.25-0.06,133.88c-0.01,3.78,0.92,4.95,4.75,4.75c6.38-0.33,12.79-0.11,19.19-0.09c6.08,0.02,8.27,2.11,8.27,8.18
	c0.04,27.57,0.07,55.14-0.06,82.7c-0.02,3.37,0.91,5.43,3.71,7.52c10.93,8.17,17.57,19.15,20,32.63c0.16,0.87,0.55,1.69,0.83,2.54
	c0,4.88,0,9.75,0,14.63c-1.76,17.17-11.57,29.02-25.25,38.35c-6.18,4.22-13.22,5.62-20.46,6.44
	C319.89,491.13,194.36,491.13,68.83,491.13z"/>
<path style="display:none;fill:#FDFDFD;transform:scale(0.2)" d="M445.42,491.13c2.52-1.48,5.49-1.27,8.17-2.19c19.37-6.66,31.47-19.96,36.48-39.78
	c0.24-0.97-0.18-2.21,1.05-2.81c0,14.02-0.06,28.03,0.06,42.05c0.02,2.29-0.52,2.82-2.8,2.8
	C474.06,491.07,459.74,491.13,445.42,491.13z"/>
<path :style="{fill:'rgba(0, 110, 170, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M261.9,67.92c0.03,15.63-12.37,28.23-27.89,28.33c-15.74,0.11-28.51-12.5-28.57-28.22
	c-0.06-15.63,12.8-28.46,28.45-28.37C249.43,39.75,261.87,52.3,261.9,67.92z"/>
<path :style="{fill:'rgba(0, 110, 170, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M130.28,67.98c0,15.85-12.55,28.34-28.4,28.27C86.41,96.18,73.92,83.6,73.81,67.97
	c-0.1-15.35,12.74-28.31,28.06-28.32C117.71,39.65,130.27,52.17,130.28,67.98z"/>
<path :style="{fill:'rgba(0, 110, 170, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M393.53,68.11c-0.02,15.56-12.6,28.15-28.1,28.14c-15.74-0.01-28.47-12.77-28.37-28.42
	c0.1-15.55,12.68-28.12,28.19-28.16C380.97,39.62,393.55,52.28,393.53,68.11z"/>
<path :style="{fill:'rgba(0, 110, 170, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M176.14,45.63c-0.01,12.27-9.05,21.35-21.25,21.37c-11.84,0.01-21.44-9.54-21.52-21.39
	c-0.07-11.74,9.66-21.54,21.39-21.53C166.5,24.08,176.15,33.82,176.14,45.63z"/>
<path :style="{fill:'rgba(0, 110, 170, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M307.76,45.8c-0.04,11.63-9.64,21.22-21.24,21.21C274.64,67,265,57.39,264.99,45.56
	c-0.01-11.83,9.7-21.54,21.5-21.48C298.24,24.13,307.8,33.89,307.76,45.8z"/>
<path :style="{fill:'rgba(0, 110, 170, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M396.62,45.75c-0.11-11.76,9.51-21.58,21.22-21.67c11.7-0.08,21.5,9.61,21.59,21.33
	c0.09,11.83-9.39,21.49-21.21,21.61C406.49,67.14,396.73,57.53,396.62,45.75z"/>
<path :style="{fill:'rgba(186, 250, 255, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M475.48,412.84c12.19,17.21,8.6,47.42-7.28,61.7c-7.49,6.73-15.91,10.21-25.35,10.21
	c-124.26,0.01-248.52,0.02-372.79,0c-17.02,0-32.34-12.36-37.08-29.81c-1.84-7.23,1.07-13.43,3.58-19.42
	c7.97-19.03,27.91-31.31,46.02-30.49c8.87,0.4,17.86,0.15,26.79,0.03c9.87-0.13,19.77-0.43,29.66,0.08
	c7.83,0.41,15.68,0.04,23.52,0.09c11.6,0.07,23.22,0.25,34.8-0.05c8.47-0.22,16.94,0.08,25.4-0.09c10.02-0.2,20.1-0.9,30.11,0.27
	c4.46,0.52,8.75-1,13.18-0.72c11.91,0.75,23.85-0.22,35.72,0.32c9.42,0.43,18.83-0.08,28.23,0.12c8.24,0.18,16.6,0.24,24.91,0.02
	c10.02-0.26,20.09-0.86,30.1,0.23c4.31,0.47,8.49-1.39,12.7-0.6c9.08,1.7,18.21,0.16,27.29,0.35c8.08,0.17,16.3,0.25,24.45,0.07
	C458.52,404.97,467.74,405.99,475.48,412.84z"/>
<path style="fill:#E8E8E8;transform:scale(0.2)" d="M293.88,155.84c2.13,0.78,1.12,2.36,1.12,3.53c0.08,29.25,0,58.5,0.18,87.74
	c0.02,3.47-1.16,4.34-5.23,4.31c-22.23-0.16-44.46-0.09-66.68-0.06c-2.52,0-4.56,0.21-4.54-2.91c0.2-27.87,0.22-55.75,0.29-83.62
	c2.44-1.84,5.49-1.44,8.36-1.45c18.48-0.04,36.95-0.01,55.43-0.02c7.64,0,7.63-0.02,9.88-6.01
	C292.9,156.75,293.35,156.27,293.88,155.84z"/>
<path style="fill:#A7D6FF;transform:scale(0.2)" d="M475.48,412.84c-6.8-2.74-13.61-5.57-20.87-5.87c-8.23-0.35-16.52-1.02-24.67-0.14
	c-3.87,0.42-7.5-1.02-11.11-0.38c-9.95,1.76-19.92-1.53-29.89,0.8c-4.06,0.95-8.4-1.95-12.58-0.83c-8.52,2.27-17.14,0.2-25.63,0.36
	c-8.26,0.15-16.75,1.4-25.14-0.26c-3.45-0.68-7.18-0.77-10.74,0.64c-3.45,1.36-6.81-1.44-10.23-0.77
	c-9.77,1.91-19.64,0.27-29.39,0.43c-8.26,0.13-16.75,1.45-25.15-0.29c-3.44-0.71-7.19-0.81-10.74,0.61
	c-3.47,1.38-6.82-1.43-10.23-0.74c-9.77,1.99-19.63,0.19-29.4,0.42c-8.09,0.19-16.44,1.33-24.67-0.26c-3.63-0.7-7.52-0.9-11.22,0.56
	c-3.34,1.32-6.54-1.33-9.75-0.7c-9.93,1.96-19.95,0.22-29.87,0.4c-8.26,0.15-16.75,1.4-25.14-0.28c-3.61-0.72-7.46-0.61-11.22,0.62
	c-4.06,1.32-8.23-0.4-12.49,0.05c-16.48,1.73-35.51,16.2-39.91,36.15c-0.85,3.86-2.79,7.39-2.44,11.61
	c-10.14-27.97,8.47-61.83,34.35-61.86c126.1-0.12,252.19-0.14,378.29,0.07C458.34,393.18,468.43,400.27,475.48,412.84z"/>
<path :style="{fill:'rgba(227, 6, 19, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M160.86,208.68c2.22,0.96,1.16,2.71,1.16,4.05c0.07,27.11-0.01,54.22,0.11,81.33
	c0.01,3.08-0.79,4.18-4.71,4.15c-21.79-0.16-43.58-0.09-65.38-0.07c-2.6,0-4.86,0.29-4.83-3.1c0.2-26.04,0.2-52.08,0.27-78.12
	c2.4-1.84,5.39-1.44,8.22-1.45c17.26-0.04,34.53-0.25,51.78,0.09C154.14,215.7,159.5,215.33,160.86,208.68z"/>
<path :style="{fill:'rgba(227, 6, 19, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M160.87,304c2.12,0.87,1.15,2.64,1.15,3.97c0.06,24.31-0.05,48.61,0.12,72.92
	c0.03,3.92-1.03,5.12-5.35,5.08c-21.6-0.21-43.21-0.11-64.82-0.08c-2.65,0-4.82,0.28-4.78-3.46c0.22-23.12,0.22-46.24,0.29-69.36
	c2.4-2.04,5.39-1.6,8.21-1.61c17.25-0.05,34.5-0.26,51.74,0.09C154.04,311.7,159.5,311.41,160.87,304z"/>
<path :style="{fill:'rgba(201, 149, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M427.09,297.98c-24.66,0.06-49.32,0.09-73.97,0.22c-3.09,0.02-3.84-1.01-3.82-3.26
	c0.14-19.31,0.18-38.62,0.25-57.92c2.16-1.6,4.88-1.47,7.51-1.48c20.98-0.04,41.97-0.04,62.95,0c2.44,0.01,4.96-0.12,7.05,1.24
	c0.77,0.97,0.52,2.05,0.53,3.1c0.01,18.33,0.01,36.66,0,54.99C427.58,295.92,427.84,297.01,427.09,297.98z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M293.86,385.69c-24.05,0.06-48.1,0.09-72.15,0.23c-3,0.02-3.75-1.06-3.73-3.56
	c0.14-22.98,0.19-45.97,0.27-68.96c2.11-1.76,4.76-1.63,7.33-1.63c20.47-0.04,40.94-0.05,61.41,0c2.38,0.01,4.84-0.13,6.87,1.37
	C294.72,337.33,294.7,361.51,293.86,385.69z"/>
<path :style="{fill:'rgba(201, 149, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M427.09,385.7c-24.66,0.07-49.32,0.1-73.97,0.26c-3.11,0.02-3.81-1.19-3.8-3.75
	c0.12-23.88,0.16-47.75,0.22-71.63c1.9-1.57,4.2-1.1,6.46-1.25c10.4-0.68,20.79,0.06,31.19-0.18c10.97-0.25,21.95,0.1,32.92-0.08
	c2.83-0.05,5.76,0.24,7.41,2.96c0.18,23.54,0.03,47.08,0.07,70.62C427.59,383.69,427.75,384.75,427.09,385.7z"/>
<path style="fill:#E8E8E8;transform:scale(0.2)" d="M428.1,156.61c0.07,20.68,0.09,41.37,0.25,62.05c0.02,2.61-1.02,3.2-3.63,3.19
	c-23.93-0.07-47.87-0.06-71.8,0.03c-2.68,0.01-3.6-0.67-3.57-3.23c0.18-17.53,0.21-35.05,0.28-52.58c2.53-2.12,5.68-1.66,8.66-1.67
	c19.13-0.05,38.25-0.1,57.38,0.03c5.26,0.04,10.03,0.1,10.4-6.41C426.11,157.15,426.96,156.52,428.1,156.61z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M342.95,345.52c0,11.97-0.11,23.94,0.07,35.9c0.05,3.32-0.51,4.62-3.9,4.54
	c-10.79-0.25-21.59-0.19-32.39-0.01c-2.9,0.05-3.89-0.7-3.87-4.08c0.12-24.43,0.09-48.86-0.01-73.3c-0.01-2.71,0.51-3.77,3.22-3.73
	c11.25,0.16,22.51,0.17,33.76,0.01c2.77-0.04,3.21,1.12,3.18,3.77c-0.11,12.3-0.05,24.6-0.05,36.9
	C342.97,345.52,342.96,345.52,342.95,345.52z"/>
<path style="fill:#FEFEFE;transform:scale(0.2)" d="M170.41,344.76c0.01-12.09,0.08-24.19-0.05-36.28c-0.03-3.02,0.41-4.45,3.73-4.38
	c11.24,0.23,22.5,0.18,33.74,0.04c2.74-0.03,3.76,0.58,3.75,3.84c-0.14,24.69-0.14,49.38-0.03,74.07c0.01,3.19-0.92,3.93-3.73,3.89
	c-11.25-0.16-22.5-0.2-33.74,0.03c-3.35,0.07-3.76-1.4-3.73-4.42C170.48,369.29,170.41,357.02,170.41,344.76z"/>
<path style="fill:#E8E8E8;transform:scale(0.2)" d="M160.9,155.84c1.93,0.39,1.21,1.99,1.22,3.07c0.06,12.76-0.07,25.52,0.11,38.27
	c0.05,3.46-1.15,4.24-4.35,4.23c-22.13-0.12-44.27-0.09-66.4-0.03c-2.61,0.01-4.41-0.05-4.32-3.64c0.27-10.38,0.2-20.77,0.26-31.15
	c2.41-2.17,5.39-1.72,8.22-1.73c18.13-0.05,36.26-0.02,54.38-0.03c7.5,0,7.5-0.02,9.7-7.2C159.94,156.94,160.37,156.35,160.9,155.84
	z"/>
<path style="fill:#E7E7E7;transform:scale(0.2)" d="M125.02,115.65c14.61,0,29.22-0.02,43.82,0.01c7.57,0.02,11.81,5.76,11.74,15.79
	c-0.06,9.6-4.29,15.24-11.54,15.24c-29.39,0.02-58.78,0.02-88.17,0c-7.22-0.01-11.39-5.64-11.46-15.35
	c-0.07-9.71,4.07-15.58,11.26-15.62c14.78-0.08,29.56-0.02,44.35-0.02C125.02,115.68,125.02,115.67,125.02,115.65z"/>
<path style="fill:#E7E7E7;transform:scale(0.2)" d="M256.84,148.72c-14.46,0-28.93,0.06-43.39-0.03c-7.22-0.04-11.33-5.96-11.33-15.94
	c0-9.99,4.18-16.14,11.25-16.15c29.27-0.06,58.54-0.06,87.82,0c6.96,0.01,11.17,6.41,11.05,16.42c-0.11,9.66-4.22,15.67-10.97,15.7
	c-14.81,0.08-29.62,0.02-44.42,0.02C256.84,148.74,256.84,148.73,256.84,148.72z"/>
<path style="fill:#E7E7E7;transform:scale(0.2)" d="M388.58,147.76c-14.57,0-29.14,0.03-43.7-0.01c-7.81-0.02-12.09-5.65-12.17-15.86
	c-0.08-10.28,4.24-16.3,11.87-16.31c29.49-0.03,58.97-0.04,88.46,0c7.64,0.01,11.97,6.02,11.9,16.27
	c-0.07,10.24-4.33,15.88-12.13,15.89C418.06,147.78,403.32,147.76,388.58,147.76z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M294.59,297.88c-24.05,0.08-48.1,0.12-72.15,0.31c-2.97,0.02-3.83-1.19-3.76-4.36
	c0.2-8.94,0.2-17.89,0.29-26.83c2.11-2.22,4.78-2.02,7.36-2.03c20.38-0.05,40.76-0.05,61.14,0c2.39,0.01,4.85-0.18,6.96,1.54
	C295.64,276.97,295.31,287.42,294.59,297.88z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M55.36,387.65c0-23.29-0.03-45.94,0.02-68.59c0.01-4.63-1.95-10.83,1.07-13.49
	c3.52-3.1,11.65-0.56,17.74-1.05c4.28-0.34,5.85,0.59,5.82,4.26c-0.21,24.33-0.15,48.67,0,73c0.02,2.95-0.77,4.26-4.91,4.01
	C68.67,385.4,62.38,386.53,55.36,387.65z"/>
<path style="fill:#FDFDFD;transform:scale(0.2)" d="M460.14,345.69c0,12.12-0.14,24.25,0.09,36.37c0.06,3.22-0.78,4.63-5.4,3.55
	c-4.96-1.15-10.15-1.17-15.24-0.93c-4.33,0.2-5.12-1.06-5.1-4c0.14-24.25,0.15-48.5-0.02-72.74c-0.02-3.18,0.96-4.5,5.47-4.16
	c6.56,0.48,15.38-2.01,19.12,1.08c3.25,2.68,1,9.13,1.03,13.92c0.06,8.97,0.02,17.94,0.02,26.91
	C460.12,345.69,460.13,345.69,460.14,345.69z"/>
<path style="fill:#CCCCCC;transform:scale(0.2)" d="M428.1,156.61c-0.3,0.38-0.79,0.73-0.87,1.13c-1.35,7.08-1.34,7.08-10.62,7.08
	c-22.33,0-44.66,0-66.99,0.01c-0.65-9.1-0.65-9.12,10.77-9.12c20.89-0.02,41.79-0.04,62.68,0.03
	C424.72,155.74,426.87,154.75,428.1,156.61z"/>
<path style="fill:#CCCCCC;transform:scale(0.2)" d="M293.88,155.84c-0.05,8.99-0.05,8.97-11.14,8.97c-21.24-0.01-42.48,0.01-63.72,0.02
	c-0.72-9.18-0.72-9.17,10.4-9.14C250.9,155.74,272.39,155.79,293.88,155.84z"/>
<path style="fill:#CCCCCC;transform:scale(0.2)" d="M160.9,155.84c-0.13,8.96-0.13,8.95-10.92,8.96c-20.85,0-41.7,0.01-62.54,0.02
	c-0.68-9.15-0.68-9.16,10.11-9.14C118.66,155.72,139.78,155.79,160.9,155.84z"/>
<path :style="{fill:'rgba(201, 149, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M426.84,237c-25.77,0.01-51.53,0.01-77.3,0.02c-0.57-9.12-0.57-9.15,10.41-9.13
	c22.38,0.03,44.76,0.09,67.14,0.13C427.77,231.03,428.21,234.03,426.84,237z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M294.38,267.39c-25.14,0.01-50.28,0.02-75.42,0.03c-0.82-9.45-0.82-9.44,10.27-9.41
	c21.77,0.07,43.54,0.13,65.31,0.19C295.34,261.28,295.65,264.34,294.38,267.39z"/>
<path style="fill:#C99510;transform:scale(0.2)" d="M426.72,313.65c-2.72-0.7-5.48-1.17-8.35-0.91c-12.32,1.1-24.77,0.39-37.05,0.37
	c-10.57-0.02-21.34,1.07-31.94-0.37c-0.52-8.33-0.52-8.34,9.78-8.33c22.58,0.04,45.16,0.09,67.74,0.13
	C427.68,307.59,428.01,310.63,426.72,313.65z"/>
<path :style="{fill:'rgba(227, 6, 19, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M160.86,208.68c-0.01,8.23-0.01,8.22-9.66,8.23c-21.24,0.01-42.48,0.01-63.73,0.02
	c-0.58-8.43-0.58-8.45,9.49-8.43C118.26,208.55,139.56,208.62,160.86,208.68z"/>
<path :style="{fill:'rgba(227, 6, 19, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M160.87,305.03c-0.04,8.15-0.04,8.17-9.73,8.17c-21.22,0.01-42.44,0.01-63.66,0.01
	c-0.54-8.34-0.54-8.38,9.11-8.37C118.02,304.89,139.45,304.97,160.87,305.03z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M292.94,313.19c-24.92,0.01-49.83,0.01-74.75,0.02c-0.61-8.36-0.61-8.38,9.38-8.36
	c21.85,0.04,43.7,0.11,65.55,0.17C293.86,307.76,294.13,310.49,292.94,313.19z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M211.59,68.3c-0.1-13.04,9.58-22.87,22.41-22.75c12.54,0.12,21.9,9.74,21.86,22.49
	c-0.03,12.76-9.36,22.21-22.03,22.32C221.24,90.47,211.69,81,211.59,68.3z"/>
<path :style="{fill:'rgba(227, 6, 19, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M80.01,67.97c0.07-13.21,9.63-22.67,22.66-22.42c12.6,0.24,21.7,9.87,21.58,22.81
	c-0.12,12.76-9.56,22.06-22.35,22.02C89.31,90.34,79.95,80.76,80.01,67.97z"/>
<path :style="{fill:'rgba(201, 149, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M387.4,67.92c-0.04,13.21-9.43,22.54-22.58,22.42c-12.35-0.11-21.58-9.87-21.46-22.71
	c0.12-12.68,9.62-22.17,22.14-22.1C378.04,45.6,387.43,55.2,387.4,67.92z"/>
<path :style="{fill:'rgba(227, 6, 19, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M154.33,59.64c-8.73-0.23-14.54-6.73-14.17-15.85c0.35-8.59,6.52-14.54,14.73-14.21
	c8.17,0.33,14.79,7.65,14.47,16.01C169.05,53.83,162.61,59.86,154.33,59.64z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M285.96,57.17c-7.23-0.19-12.23-5.79-11.86-13.32c0.34-7.18,5.58-12.18,12.44-11.86
	c6.86,0.32,12.38,6.46,12.09,13.45C298.33,52.31,292.89,57.35,285.96,57.17z"/>
<path :style="{fill:'rgba(201, 149, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M428.58,37.73c4.39,6.06,3.3,13.38-2.63,17.75c-6.25,4.6-13.68,3.26-18.3-3.29
	c-4.51-6.39-3.58-13.54,2.33-17.72C415.86,30.29,424.26,31.76,428.58,37.73z"/>
<path :style="{fill:'rgba(227, 6, 19, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M113.79,250.72c8.96,0.06,14.7,4.99,14.64,12.57c-0.06,7.19-6.1,12.15-14.74,12.12
	c-9-0.04-14.52-5.07-14.45-13.18C99.3,255.18,105,250.67,113.79,250.72z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M260.78,361.15c-0.06,6.33-5.94,12.07-12.37,12.06c-7.14-0.02-13-5.89-13.11-13.13
	c-0.08-5.43,6.91-12.46,12.54-12.44C253.79,347.66,261.6,352.83,260.78,361.15z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M257.15,325.68c4.57,0.01,7.29,2.71,7.3,7.25c0.01,4.92-3,8.18-7.66,8.27
	c-4.16,0.08-7.02-3.31-6.98-8.31C249.84,328.35,252.56,325.67,257.15,325.68z"/>
<path :style="{fill:'rgba(125, 185, 40, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M278.32,354.93c-0.32,5.13-2.03,7.23-5.73,7.29c-3.31,0.05-5.5-2.44-5.42-5.85
	c0.09-3.97,2.8-5.4,5.98-5.42C276.36,350.94,278.62,352.73,278.32,354.93z"/>
<path :style="{fill:'rgba(201, 149, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M392.41,360.66c-0.03,7.62-5.09,12.67-12.55,12.55c-7.68-0.13-12.19-5.3-12.13-13.93
	c0.04-6.57,5.32-11.71,11.96-11.66C387.15,347.68,392.44,353.09,392.41,360.66z"/>
<path :style="{fill:'rgba(201, 149, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M381.44,333.05c-0.01-4.59,2.66-7.33,7.17-7.37c4.8-0.04,7.51,2.69,7.46,7.52
	c-0.05,4.62-3.23,8.02-7.45,7.96C384.14,341.1,381.44,338.05,381.44,333.05z"/>
<path :style="{fill:'rgba(201, 149, 16, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M409.79,357.52c-0.15,2.38-1.73,4.46-5.2,4.69c-3.39,0.23-5.84-2.15-5.76-5.53
	c0.08-3.45,2.16-5.37,5.32-5.74C407.59,350.54,409.7,352.88,409.79,357.52z"/>
                </g>
        </svg>

        <div class="modal inner_color_model w3-animate-left" :id="'myModal'+dynamicIndexValue">
            <div v-if="ShowModalArea == 'myModal'+dynamicIndexValue">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <!-- Nav pills -->
                        <ul class="nav nav-pills nav-justified">
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Color"  @click="openElementInModal('palette')" ><img src="images/all_use_icon/paint.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Rotate"  @click="openElementInModal('rotate')" ><img src="images/all_use_icon/rotateicon.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Flip"  @click="openElementInModal('mirror')" ><img src="images/all_use_icon/flip_ltr.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Zoom"  @click="openElementInModal('opacity')" ><img src="images/all_use_icon/zoom-in.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Clone"   @click="openElementInModal('duplicate'), cloneElement($event)"><img src="images/all_use_icon/duplicate.svg"></a>
                            </li>
                            <!-- <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Layer"   @click="openElementInModal('layers')" ><img src="images/all_use_icon/layers.svg"></a>
                            </li> -->
                            <li class="nav-item" @click="removeElement(dynamicIndexValue)">
                                <a class="nav-link" data-toggle="Delete"><img src="images/all_use_icon/remove.svg"></a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link"  data-dismiss="modal" @click="hideElement" title="Close"><img src="images/all_use_icon/close-circle.svg" alt=""></a>
                            </li>
                        </ul>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div :class="{'tab-pane':true, active:ActivePalette=='active'}" id="palette">
                                <div class="bulldog_svg" :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
                                    <h2>Select Color</h2>
                                    <button :style="{background:'rgba('+getterTestTubeBg1+')'}" @click="ShowElement(getterTestTubeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTestTubeBg2+')'}" @click="ShowElement1(getterTestTubeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTestTubeBg3+')'}" @click="ShowElement2(getterTestTubeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTestTubeBg4+')'}" @click="ShowElement3(getterTestTubeBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTestTubeBg5+')'}" @click="ShowElement4(getterTestTubeBg5)" :class="this.ValueId+'_color5btn'"></button>
                                </div>

                                <Colorpicker class="color_bulldog" v-if="this.showColorPicker" :colorElement="this.colorValue" :valueElement="this.clickedInput" />
                            </div>
                             <div :class="{'tab-pane':true, active:ActiveRotate=='active'}" id="rotate">
                                <div class="bulldog_svg">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <h2>Rotate</h2>
                                            <circle-slider v-model="sliderValue" :side="150" :min="0" :max="368" :step-size="2"></circle-slider>
                                        </div>
                                         <button @click="resetRotate()" type="button" class="btn btn-warning rotate_btn">Reset Rotate</button>
                                    </div>
                                </div>
                            </div>
                            <div :class="{'tab-pane':true, active:ActiveMirror=='active'}" id="mirror">
                                <div class="bulldog_svg">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <h2>flip</h2>
                                            <label for="fip-icon" :class="{flip_icon:true , active:rotateLeft=='active' }">
                                                <input  value="-1" type="radio" name="fipIcon" id="fip-icon" checked="" @click="sentFlip('-1')">
                                                <span class="title btn"><img src="images/all_use_icon/flip_icon.svg" style="transform:scaleX(-1)" alt="" title=""></span>
                                            </label>
                                            <label for="fip-icon" :class="{flip_icon:true , active:rotateRight=='active' }">
                                                <input  type="radio" value="1" name="fipIcon" id="fip-icon" checked=""  @click="sentFlip('1')">
                                                <span class="title btn"><img src="images/all_use_icon/flip_icon.svg" alt="" title=""></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div :class="{'tab-pane':true , active:ActiveOpacity =='active'}" id="opacity">
                                <div class="bulldog_svg">
                                    <h2>Zoom</h2>
                                    <vue-slider ref="slider" v-model="scaleValue" v-bind="options">
                                    </vue-slider>
                                    <h3 class="text-right">{{ scaleValue * 10}}%</h3>
                                </div>
                            </div>
                            <!-- <div class="tab-pane fade" id="duplicate">
                                <div class="bulldog_svg">
                                    <h2>Image Duplicate</h2>
                                    <img src="images/all_use_icon/copy.svg" class="svg_popup" alt="" title="">
                                </div>
                            </div>
                            <div class="tab-pane fade" id="layers">

                            </div> -->

                        </div>
                    </div>
                    <!-- Modal footer -->
                    <!-- <div class="modal-footer" v-if="this.showColorPicker">
                        <button class="btn_grey" data-dismiss="modal" @click="hideElement">Close</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Colorpicker from '../colorPickerComponent'
    import VueSlider from 'vue-slider-component'
    import {
        mapState,
        mapActions,
        mapGetters,
        mapMutations
    }
    from 'vuex';
    export default {
        //   props:['dynamicBackground' ,'dynamicBackgroundOne', 'dynamicBackgroundTwo' , 'dynamicIndex', 'ValueId' , 'svgName'],
        props: ['dynamicBackground', 'dynamicBackgroundOne', 'dynamicBackgroundTwo', 'dynamicIndexValue', 'ValueId', 'svgName', 'NavClicked'],
        components: {
            Colorpicker,
            VueSlider,
        },
        mounted() {
            /*
                This will get these from SvgComponentArray
            */
                this.sliderValue = this.$store.state.SvgComponent[this.dynamicIndexValue][0].circleSlider

                this.scaleValue = this.$store.state.SvgComponent[this.dynamicIndexValue][0].zoomValue
                
                this.flipElement = this.$store.state.SvgComponent[this.dynamicIndexValue][0].flipValue
            /*
                End
            */
            var width = window.innerWidth;
            var height = window.innerWidth
        var TestTube= [
            {top:135 ,left:106},
            {top:95 ,left:32},
            {top:127 ,left:12},
            {top:9 ,left:99},
            {top:502 ,left:81},
            {top:362 ,left:123},
            {top:251 ,left:133},
            {top:376 ,left:155},
            {top:134 ,left:110},
            {top:468 ,left:124},
        ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = TestTube[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  TestTube[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'TestTube'){
                //  console.log(randomNumber ,'---', randomNumberTop)
                 this.ACTION_CHANGE_STATE(['randomYAxis' , randomNumberTop])
                 this.ACTION_CHANGE_STATE(['randomXAxis' , randomNumber])
            }
            var randomWidth = randomNumber
            var randomHeight = randomNumberTop
        }else{    
            var randomWidth = Math.floor(Math.random()*200);
            var randomHeight = Math.floor(Math.random()*500);
        }
            var x = this.dynamicIndexValue
            $('#' + x).css({
                left: randomWidth,
                top: randomHeight
            })
            $("#myModal").modal({
                focus: false,
                // Do not show modal when innitialized.
                show: false,
                backdrop: 'static', // For static modal
                keyboard: false // prevent click outside of the modal
            });
            var DynamicIDs = this.dynamicIndexValue
            $(function() { 
            var isDragging = false;
            var test= $( "#"+DynamicIDs).draggable({
             zIndex: 100,
             cursor: "move",
            })
            // Getter
            var zIndex = $( "#"+DynamicIDs ).draggable( "option", "zIndex" );
            // Setter
            $( "#"+DynamicIDs ).draggable( "option", "zIndex", 100 );
            })
            
            // Getter
            var cursor = $( ".selector" ).draggable( "option", "cursor" );

            // Setter
            $( ".selector" ).draggable( "option", "cursor", "move" );
            var isDragging = false;
            var self = this  
            $( "#"+DynamicIDs).draggable({
                start: function( event, ui ) {},
                stop: function( event, ui ) {}
            });
            $( "#"+DynamicIDs).on( "dragstart", function( event, ui ) {
                // console.log(event)
                self.returnDrag = true
            });
             $( "#"+DynamicIDs).on( "dragstop", function( event, ui ) {
                setTimeout(function(){
                     self.returnDrag = false
                },500)
            }); 

        },
        computed: {
            ...mapState([
                    'background',
                    'background1',
                    'background2',
                    'dynamicIndex',
                    'dynamicName',
                    'newDisableIndex',
                    'randomYAxis',
                    'randomXAxis'
                ]),
                getterTestTubeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TestTube') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTestTubeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TestTube') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTestTubeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TestTube') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTestTubeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTestTubeBg5: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                }

        },
        data() {
            return {
                colorValue: '',
                showColorPicker: false,
                clickedInput: '',
                value: 100,
                ShowModalArea: '',
                sliderValue: 0,
                options: {
                    dotSize: 14,
                    width: 'auto',
                    height: 10,
                    contained: false,
                    direction: 'ltr',
                    data: null,
                    min: 0.8,
                    max: 10,
                    interval: 0.2,
                    disabled: false,
                    clickable: true,
                    duration: 0.5,
                    tooltip: 'focus',
                    tooltipPlacement: 'top',
                    tooltipFormatter: void 0,
                    useKeyboard: false,
                    enableCross: true,
                    fixed: false,
                    minRange: void 0,
                    maxRange: void 0,
                    order: true,
                    marks: false,
                    dotOptions: void 0,
                    process: true,
                    dotStyle: void 0,
                    railStyle: void 0,
                    processStyle: void 0,
                    tooltipStyle: void 0,
                    stepStyle: void 0,
                    stepActiveStyle: void 0,
                    labelStyle: void 0,
                    labelActiveStyle: void 0,
                },
                scale: '0.2',
                scaleValue: '0.8',
                flipElement: '1',
                rotateLeft:'',
                rotateRight:'active',
                ActivePalette:'',
                ActiveRotate:'',
                ActiveMirror:'',
                ActiveOpacity:'',
                ActiveDuplicate:'',
                ActiveLayers:'',
                returnDrag:'',
                dataloop:[1 , 2, 3, 4, 5],

            }
        },
        watch: { 
            ShowModalArea: function(newVal, oldVal) { // watch it
                //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            },
            returnDrag: function(newVal, oldVal) { // watch it
                //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
                this.returnDrag =newVal
            },

        },
        methods: {
            ...mapActions([
                    'ACTION_CHANGE_STATE',
                ]),
                ...mapMutations([

                ]),

                ShowElement(value) {
                    //   this.colorValue = value
                   // console.log(value, 'ssss')
                    var ColorValue = this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                    this.colorValue = 'rgba(' + ColorValue + ')'
                    this.showColorPicker = true
                    this.clickedInput = 'One'
                        //  console.log( , 'value')
                },
                ShowElement1(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1 + ')'
                    //console.log('sjahsja')
                    this.clickedInput = 'Two'
                    this.showColorPicker = true
                },
                ShowElement2(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2 + ')'
                    //console.log('sjahsja')
                    this.clickedInput = 'Third'
                    this.showColorPicker = true
                },
                ShowElement3(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3 + ')'
                    this.clickedInput = 'forth'
                    this.showColorPicker = true
                },
                ShowElement4(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background4 + ')'
                    this.clickedInput = 'five'
                    this.showColorPicker = true
                },
                hideElement() {
                    this.showColorPicker = false
                    this.ShowModalArea = false
                    this.enableDragData()
                    $("svg").removeClass("active");
                    //Null Active element of modal-body 
                        this.ActiveOpacity =''
                        this.ActiveRotate =''
                        this.ActiveMirror =''
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                    //Null Active element of modal-body       
                },
                getCircle(value, e){
                   // console.log(e.currentTarget)
                    if(this.returnDrag != true){
                        $("svg").removeClass("active");
                        $("#"+value+" svg").removeClass("active");
                        $(e.currentTarget).addClass('active')
                         //Null Active element of modal-body 
                            this.ActiveOpacity =''
                            this.ActiveRotate =''
                            this.ActiveMirror =''
                            this.ActiveDuplicate =''
                            this.ActiveLayers=''
                            this.ActivePalette =''
                        //Null Active element of modal-body   
                        this.ShowModalArea = false
                        var hideElementValueModal = ($('#hiddenModal').val())
                    if(hideElementValueModal !=''){
                            $('#myModal'+hideElementValueModal).hide()
                            $("#"+hideElementValueModal).draggable("enable")
                            $('#myModal'+hideElementValueModal).modal("hide");
                            $('#myModal'+value).css('display', 'block')
                    }
                        var closeModal= $('#hiddenModal').val(value)
                    
                        this.ShowModalArea = 'myModal'+value
                        this.ACTION_CHANGE_STATE(['dynamicIndex' ,value ])
                        this.ACTION_CHANGE_STATE(['tempModalIndex', value])
                        this.ACTION_CHANGE_STATE(['dynamicName' ,this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name+value ])
                        this.ACTION_CHANGE_STATE(['editSvgClicked' ,true])
                    
                    }
                },
                disableDraggable(value) {
                    // alert(value)
                    $("#" + value).draggable("disable")
                    this.ACTION_CHANGE_STATE(['newDisableIndex', value])
                },
                enableDragData() {
                    if(this.$store.state.newDisableIndex !=''){
                        $("#"+this.$store.state.newDisableIndex).draggable("enable")
                    }else{
                        $("#"+this.dynamicIndexValue).draggable("enable")
                    }
                },
                sentFlip(value) {
                    this.flipElement = value
                    if(value ==  '-1'){
                        this.rotateRight = ''
                        this.rotateLeft ='active'
                    }else{
                            this.rotateLeft =''
                        this.rotateRight = 'active'
                    }
                },
                removeElement(value){
                $('#'+this.$store.state.dynamicIndex).remove()
                  //After this remove from array to SvgComponent  from store
                },
                openElementInModal(value){
                 
                    if(value =='palette'){
                        this.ActiveOpacity =''
                        this.ActiveMirror =''
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActiveRotate =''
                        this.ActivePalette ='active'
                    }else if( value == 'rotate'){
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                        this.ActiveOpacity =''
                        this.ActiveRotate ='active'
                        this.ActiveMirror =''
                    }else if( value == 'mirror'){
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                        this.ActiveOpacity =''
                        this.ActiveRotate =''
                        this.ActiveMirror ='active'
                    }else if( value == 'opacity'){
                        this.ActiveMirror =''
                        this.ActiveDuplicate =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                        this.ActiveRotate =''
                        this.ActiveOpacity ='active'
                    }else if( value == 'duplicate'){
                        this.ActiveMirror =''
                        this.ActiveLayers=''
                        this.ActivePalette =''
                        this.ActiveOpacity =''
                        this.ActiveRotate =''
                        this.ActiveDuplicate ='active'
                    }else if( value == 'layers'){
                        this.ActiveMirror =''
                        this.ActivePalette =''
                        this.ActiveOpacity =''
                        this.ActiveRotate =''
                        this.ActiveDuplicate ='active'
                        this.ActiveLayers ='active'
                    }
                },
                resetRotate(){
                    this.sliderValue = 0
                },
                cloneElement(e){
                    var number = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id
                    var cloneElementId = number.split('l')
                    var elemntId = cloneElementId[1]
                    var styleAttrClone = $('#'+elemntId).find( "svg" ).attr('style')
                    /* 
                    This is for color dynamic on clone 
                    */
                    var tempArrayClone = this.$store.state.SvgComponent[elemntId][0]
                    var backgroundClone = tempArrayClone.background 
                    var background1Clone =tempArrayClone.background1 
                    var background2Clone =tempArrayClone.background2 
                    var background3Clone =tempArrayClone.background3 
                    var background4Clone =tempArrayClone.background4 
                    var background5Clone =tempArrayClone.background5 
                    var circleSliderClone = this.sliderValue
                    var scaleValueClone =this.scaleValue 
                    var flipElementClone = this.flipElement
                    var tempArray = []
                
                        tempArray = [
                            {
                            name:'TestTube',
                            background :  backgroundClone,
                            background1:  background1Clone,
                            background2:  background2Clone,
                            background3:  background3Clone,
                            background4:  background4Clone,
                            circleSlider: circleSliderClone,
                            zoomValue:scaleValueClone,
                            flipValue:flipElementClone,
                        }
                        ]
                        this.$store.state.SvgComponent.push(tempArray)
                        var cloneIndex = this.$store.state.SvgComponent.length-1 
                        $(document).ready(function(){
                           // console.log($('.Svg_'+cloneIndex+'_color1') , 'length')
                            $('.Svg_'+cloneIndex+'_color1').css({fill: 'rgba('+backgroundClone+')'})
                            $('.Svg_'+cloneIndex+'_color2').css({fill: 'rgba('+background1Clone+')'})
                            $('.Svg_'+cloneIndex+'_color3').css({fill: 'rgba('+background2Clone+')'})
                            $('.Svg_'+cloneIndex+'_color4').css({fill: 'rgba('+background3Clone+')'})
                            $('.Svg_'+cloneIndex+'_color5').css({fill: 'rgba('+background4Clone+')'})
                            
                            $('#'+cloneIndex).find("svg").attr('style',styleAttrClone);
                        })
                    /* 
                    End
                    */
                }
        }
    }
</script>

<style>

</style>