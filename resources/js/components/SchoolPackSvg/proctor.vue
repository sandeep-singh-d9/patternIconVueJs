<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(204, 89, 32, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M288.96,313.04c-88.16,0-176.32,0-264.48,0c-9.84,0-13.07-3.14-13.09-12.83
	c-0.03-24.78-0.03-49.55,0-74.33c0.01-8.55,3.43-11.94,12.03-11.96c14.04-0.04,28.08-0.24,42.12,0.08c4.52,0.1,6.02-1.12,6.22-5.65
	c1-22.23,5.85-43.73,14.18-64.3c21.69-53.54,58.43-93.39,110.88-117.73c54.96-25.5,111.74-28.22,168.26-6.51
	c72.77,27.95,117.9,81.26,136.78,156.78c2.5,9.99,3.9,20.24,4.1,30.56c0.09,4.9,1.11,7.16,6.97,6.92
	c13.81-0.56,27.66-0.18,41.49-0.14c8.52,0.02,12.07,3.46,12.09,11.95c0.05,24.78,0.03,49.55,0.01,74.33
	c-0.01,9.67-3.24,12.83-13.08,12.83C465.28,313.04,377.12,313.04,288.96,313.04z"/>
<path :style="{fill:'rgba(255, 208, 84, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M41.31,242.4c43.07-0.07,86.15-0.2,129.22-0.21c126.86-0.02,253.72,0.06,380.59-0.12
	c5.97-0.01,7.51,1.58,7.37,7.48c-0.4,16.72-0.27,33.47-0.05,50.2c0.05,4.04-1.12,5.22-5.09,5.12c-10.55-0.27-21.11-0.24-31.66-0.03
	c-3.67,0.07-4.85-1.13-4.75-4.81c0.23-8.25,0.15-16.52,0.06-24.77c-0.08-7.53-4.27-12.29-10.5-12.2c-6.2,0.09-10.16,4.87-10.2,12.47
	c-0.05,8.26-0.14,16.52,0.05,24.77c0.07,3.33-0.87,4.88-4.35,4.49c-1.7-0.19-3.44-0.01-5.17,0c-10.33,0.04-10.33,0.04-11.18-10.5
	c-0.48-6.05-4.78-10.33-10.39-10.35c-5.62-0.02-9.88,4.26-10.3,10.35c-0.73,10.53-0.73,10.53-11.19,10.49
	c-1.51-0.01-3.04-0.19-4.52,0.03c-4.05,0.6-5.18-1.11-5.05-5.09c0.28-8.25,0.16-16.52,0.06-24.77c-0.09-7.18-4.12-11.77-10.13-11.86
	c-6.31-0.09-10.43,4.57-10.51,12.13c-0.09,8.26-0.17,16.52,0.05,24.77c0.1,3.61-0.92,5.32-4.68,4.83c-1.27-0.17-2.58,0-3.87-0.02
	c-3.66-0.06-8.03,1.1-10.78-0.53c-3.24-1.92-0.93-6.75-1.38-10.29c-0.76-5.99-5.16-10.24-10.71-10.05
	c-5.55,0.19-9.65,4.57-10.01,10.71c-0.61,10.1-0.61,10.1-10.87,10.14c-9.81,0.04-9.8,0.04-9.79-9.95c0.01-6.74,0.1-13.48-0.03-20.21
	c-0.13-7.09-4.34-11.61-10.46-11.52c-6.05,0.09-10.08,4.67-10.16,11.82c-0.09,8.47-0.15,16.95,0.04,25.43
	c0.07,3.31-0.84,4.9-4.33,4.5c-1.7-0.2-3.44-0.03-5.17-0.03c-10.37-0.01-10.37-0.01-11.26-10.53c-0.52-6.12-4.79-10.37-10.38-10.31
	c-5.65,0.06-9.82,4.28-10.27,10.42c-0.77,10.41-0.77,10.41-11.35,10.43c-0.65,0-1.31-0.08-1.94,0.01c-5.61,0.88-8.05-0.89-7.53-7.2
	c0.62-7.56,0.21-15.2,0.11-22.81c-0.09-7.07-4.22-11.67-10.27-11.71c-6.09-0.04-10.26,4.52-10.35,11.61
	c-0.1,8.47-0.2,16.96,0.05,25.42c0.11,3.77-1.18,5.15-4.79,4.7c-1.27-0.16-2.58-0.01-3.87-0.03c-3.66-0.07-8.09,1.12-10.77-0.55
	c-3.11-1.94-0.9-6.8-1.33-10.36c-0.73-6.02-5.14-10.17-10.77-9.92c-5.36,0.23-9.39,4.38-9.88,10.15c-0.91,10.7-0.91,10.7-11.71,10.7
	c-8.94,0-8.94,0-8.96-8.84c-0.02-7.17,0.09-14.35-0.04-21.51c-0.12-6.87-4.59-11.52-10.65-11.38c-5.82,0.14-9.91,4.62-10,11.29
	c-0.11,8.69-0.18,17.39,0.04,26.08c0.09,3.48-1.09,4.77-4.44,4.37c-1.27-0.15-2.58-0.01-3.87-0.05c-3.85-0.12-8.5,1.03-11.31-0.76
	c-2.86-1.83-0.7-6.84-1.15-10.42c-0.69-5.62-5.03-9.66-10.4-9.62c-5.4,0.04-9.61,4.08-10.21,9.79
	c-1.16,11.09-1.18,10.74-12.62,11.19c-6.2,0.24-8.92-1.03-8.25-8.01c0.7-7.32,0.27-14.76,0.15-22.15
	c-0.12-7.1-4.29-11.7-10.33-11.71c-6.04-0.02-10.26,4.63-10.35,11.66c-0.1,8.26-0.27,16.53,0.07,24.77c0.18,4.44-1.44,5.87-5.52,5.3
	c-0.84-0.12-1.72,0.01-2.58,0c-3.86-0.08-8.48,1.11-11.39-0.62c-3.05-1.81-0.81-6.8-1.25-10.36c-0.59-4.82-3.14-8.13-7.69-9.45
	c-5.97-1.72-9.77,1.65-12.83,6.29c-2.06-1.72-2.15-4.17-2.18-6.53c-0.16-11.89-0.16-23.79,0-35.68
	C39.43,246.25,39.63,244.06,41.31,242.4z"/>
<path :style="{fill:'rgba(255, 208, 84, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M120.47,125.21c10.05-3.86,12.14-7.7,9.2-16.95c2.13-5.88,4.76-11.39,10.76-14.49
	c5.04,1.28,9.71,0.86,13.09-3.49c3.38-4.35,2.49-8.91,0.04-13.38c2.81-5.66,7.99-9.21,12.36-13.48c5.46,6.57,10.85,7.93,16.27,4.12
	c5.28-3.72,5.63-9.23,1.09-17.23c4.07-5.26,8.71-9.69,15.8-10.6c0.86,1.77,1.61,3.6,2.6,5.3c3.28,5.65,8.69,7.67,14,5.32
	c5.45-2.42,7.77-7.66,6.03-13.67c-0.94-3.26-4.71-6.8-2.98-9.43c2.03-3.09,7.22-2.68,10.91-4.15c5.67-2.26,8.1-0.78,8.77,5.59
	c0.85,8.09,6.89,12.42,13.61,11.04c6.27-1.28,9.27-7.06,7.72-14.9c-1.52-7.73-1.21-8.13,7.04-8.68c1.11-0.07,2.26,0.05,3.33-0.17
	c6.14-1.24,8.82,0.48,8.33,7.29c-0.56,7.81,3.85,12.47,10.34,12.55c6.57,0.08,11.21-4.58,10.75-12.2c-0.39-6.46,1.21-9.42,8.19-7.66
	c1.06,0.27,2.22,0.1,3.33,0.17c8.82,0.56,8.82,0.57,7.44,8.93c-1.32,8.01,1.88,13.48,8.55,14.6c6.32,1.06,11.83-3.42,12.63-11.38
	c0.61-6.1,2.92-7.6,8.38-4.98c0.79,0.38,1.7,0.5,2.56,0.74c10.12,2.79,10.12,2.79,6.61,12.13c-2.4,6.38-0.06,11.98,6.04,14.49
	c5.34,2.19,10.85-0.04,13.89-5.64c4.91-9.04,4.91-9.04,13.98-4.29c7.59,3.98,7.59,3.98,3.14,10.85c-4.38,6.75-3.63,12.96,2.01,16.67
	c5.6,3.68,12.05,2.16,16.21-5.01c3.34-5.75,6.25-6.29,10.61-1.55c0.74,0.81,1.68,1.44,2.54,2.13c6.67,5.37,6.67,5.37,0.97,11.24
	c-5.23,5.39-5.77,11.98-1.31,16.27c4.42,4.27,11.64,4.11,16.45-1.56c4.7-5.54,7.81-4.62,11.23,0.7c0.24,0.37,0.52,0.71,0.8,1.05
	c6.38,7.76,6.38,7.76-1.63,13.94c-5.15,3.97-6.31,9.48-3.02,14.43c3.19,4.81,9.14,6.1,14.65,3.16c9.42-5.02,9.42-5.02,14.48,4.6
	c3.9,7.42,3.9,7.42-3.82,10.72c-7.17,3.07-10.06,8.54-7.62,14.44c2.65,6.4,8.35,8.34,16.11,5.5c8.06-2.95,8.07-2.96,10.42,4.89
	c0.63,2.1,0.84,4.36,1.74,6.32c1.76,3.83-0.14,5.05-3.53,5.64c-2.39,0.42-4.88,0.7-7.11,1.58c-5.35,2.12-8.17,7.86-6.64,12.86
	c1.49,4.87,7.31,8.47,12.58,7.79c10.86-1.41,10.43-1.37,11.57,9.51c0.68,6.51-1.2,8.27-7.74,7.96c-11.78-0.57-23.61-0.25-35.42-0.3
	c-2.41-2.97-1.9-6.69-2.48-10.06c-8.77-50.71-38.31-85.01-85.75-105.16c-2.96-1.26-5.68-3.62-9.3-3.07
	c-23.39-12.29-48.25-18.66-74.86-18.31c-70.42,0.94-131.97,52.12-144.57,120.29c-0.44,2.37-1,4.72-1.26,7.11
	c-1.03,9.34-0.99,9.36-10.23,9.34c-11.36-0.03-22.72-0.1-34.08-0.16c-3.22-4.03-0.86-8.36-0.71-12.58c0.09-2.39,0.41-4.76,0.59-7.14
	c3.61-3.78,5.42-7.95,3.02-13.07c0.69-7.73,3.75-14.96,4.91-22.59c7.93-4.55,9.36-7.7,7.09-15.53
	C113.01,136.86,114.54,129.96,120.47,125.21z"/>
<path :style="{fill:'rgba(255, 208, 84, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M41.31,227.4c43.07-0.07,86.15-0.2,129.22-0.21c126.86-0.02,253.72,0.06,380.59-0.12
	c5.97-0.01,7.51,1.58,7.37,7.48c-0.4,16.72-0.27,33.47-0.05,50.2c0.05,4.04-1.12,5.22-5.09,5.12c-10.55-0.27-21.11-0.24-31.66-0.03
	c-3.67,0.07-4.85-1.13-4.75-4.81c0.23-8.25,0.15-16.52,0.06-24.77c-0.08-7.53-4.27-12.29-10.5-12.2c-6.2,0.09-10.16,4.87-10.2,12.47
	c-0.05,8.26-0.14,16.52,0.05,24.77c0.07,3.33-0.87,4.88-4.35,4.49c-1.7-0.19-3.44-0.01-5.17,0c-10.33,0.04-10.33,0.04-11.18-10.5
	c-0.48-6.05-4.78-10.33-10.39-10.35c-5.62-0.02-9.88,4.26-10.3,10.35c-0.73,10.53-0.73,10.53-11.19,10.49
	c-1.51-0.01-3.04-0.19-4.52,0.03c-4.05,0.6-5.18-1.11-5.05-5.09c0.28-8.25,0.16-16.52,0.06-24.77c-0.09-7.18-4.12-11.77-10.13-11.86
	c-6.31-0.09-10.43,4.57-10.51,12.13c-0.09,8.26-0.17,16.52,0.05,24.77c0.1,3.61-0.92,5.32-4.68,4.83c-1.27-0.17-2.58,0-3.87-0.02
	c-3.66-0.06-8.03,1.1-10.78-0.53c-3.24-1.92-0.93-6.75-1.38-10.29c-0.76-5.99-5.16-10.24-10.71-10.05
	c-5.55,0.19-9.65,4.57-10.01,10.71c-0.61,10.1-0.61,10.1-10.87,10.14c-9.81,0.04-9.8,0.04-9.79-9.95c0.01-6.74,0.1-13.48-0.03-20.21
	c-0.13-7.09-4.34-11.61-10.46-11.52c-6.05,0.09-10.08,4.67-10.16,11.81c-0.09,8.47-0.15,16.95,0.04,25.43
	c0.07,3.31-0.84,4.9-4.33,4.5c-1.7-0.2-3.44-0.03-5.17-0.03c-10.37-0.01-10.37-0.01-11.26-10.53c-0.52-6.12-4.79-10.37-10.38-10.31
	c-5.65,0.06-9.82,4.28-10.27,10.42c-0.77,10.41-0.77,10.41-11.35,10.43c-0.65,0-1.31-0.08-1.94,0.01c-5.61,0.88-8.05-0.89-7.53-7.2
	c0.62-7.56,0.21-15.2,0.11-22.81c-0.09-7.07-4.22-11.67-10.27-11.71c-6.09-0.04-10.26,4.52-10.35,11.61
	c-0.1,8.47-0.2,16.96,0.05,25.42c0.11,3.77-1.18,5.15-4.79,4.7c-1.27-0.16-2.58-0.01-3.87-0.03c-3.66-0.07-8.09,1.12-10.77-0.55
	c-3.11-1.94-0.9-6.8-1.33-10.36c-0.73-6.02-5.14-10.17-10.77-9.92c-5.36,0.23-9.39,4.38-9.88,10.15c-0.91,10.7-0.91,10.7-11.71,10.7
	c-8.94,0-8.94,0-8.96-8.84c-0.02-7.17,0.09-14.35-0.04-21.51c-0.12-6.87-4.59-11.52-10.65-11.38c-5.82,0.14-9.91,4.62-10,11.29
	c-0.11,8.69-0.18,17.39,0.04,26.08c0.09,3.48-1.09,4.77-4.44,4.37c-1.27-0.15-2.58-0.01-3.87-0.05c-3.85-0.12-8.5,1.03-11.31-0.76
	c-2.86-1.83-0.7-6.84-1.15-10.42c-0.69-5.62-5.03-9.66-10.4-9.62c-5.4,0.04-9.61,4.08-10.21,9.79
	c-1.16,11.09-1.18,10.74-12.62,11.19c-6.2,0.24-8.92-1.03-8.25-8.01c0.7-7.32,0.27-14.76,0.15-22.15
	c-0.12-7.1-4.29-11.7-10.33-11.71c-6.04-0.02-10.26,4.63-10.35,11.66c-0.1,8.26-0.27,16.53,0.07,24.77c0.18,4.44-1.44,5.87-5.52,5.3
	c-0.84-0.12-1.72,0.01-2.58,0c-3.86-0.08-8.48,1.11-11.39-0.62c-3.05-1.81-0.81-6.8-1.25-10.36c-0.59-4.82-3.14-8.13-7.69-9.45
	c-5.97-1.72-9.77,1.65-12.83,6.29c-2.06-1.72-2.15-4.17-2.18-6.53c-0.16-11.89-0.16-23.79,0-35.68
	C39.43,231.25,39.63,229.06,41.31,227.4z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M386.35,217.55c-9.18,0-18.38-0.47-27.52,0.18c-5.33,0.38-6.18-2.24-7.41-6.48
	c-8.24-28.38-26.56-45.8-54.92-49.84c-26.63-3.8-47.93,7.05-63.44,29.73c-4.53,6.63-7.58,14.1-9.16,22.05
	c-0.69,3.46-2.05,4.47-5.4,4.44c-19.04-0.16-38.08-0.26-57.12,0.05c-4.84,0.08-5.02-1.7-4.45-5.74
	c6.78-48.06,30.86-83.76,72.75-105.38c79.66-41.1,174.7,10.11,188.86,101.12c0.15,0.94,0.08,1.92,0.33,2.82
	c1.7,6.08-0.67,7.54-6.38,7.19C403.81,217.16,395.07,217.55,386.35,217.55z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M356.27,93.58c1.84-2.41,3.84-0.68,5.62-0.05c44.78,15.92,75.59,44.81,90.98,88.1
	c3.76,10.58,6.49,21.26,6.38,32.49c-6.81-0.02-14.89,2.11-20.06-0.66c-5.22-2.8-2.64-11.37-4.02-17.34
	C424.68,150.94,398.4,116.79,356.27,93.58z"/>
<path :style="{fill:'rgba(255, 208, 84, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M289.08,215.88c-15.07,0-30.14-0.15-45.2,0.09c-4.61,0.08-6.6-0.57-4.76-6.58
	c6.68-21.82,27.8-38.78,49.07-38.96c22.4-0.19,43.79,16.38,50.8,38.92c1.85,5.95-0.02,6.7-4.71,6.63
	C319.22,215.72,304.15,215.88,289.08,215.88z"/>
<path :style="{fill:'rgba(253, 253, 253, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M41.31,227.4c0.09,19.91,0.17,39.83,0.26,59.74c-0.89,5.71,2.01,13.47-1.52,16.74
	c-2.94,2.72-8.75,0.2-13.2,0.87c-5.31,0.79-6.32-1.87-6.23-7.96c0.29-20.98,0.22-41.97,0.03-62.96c-0.05-4.98,0.69-7.33,5.19-6.83
	C30.96,227.59,36.15,227.31,41.31,227.4z"/>
<path style="fill:#FBFBFB; transform:scale(0.2)" d="M95.92,194.92c3.2,3.06,1.38,6.55,1.09,9.9c-0.26,3.06-0.64,6.11-0.97,9.16
	c-2.89,0.07-5.8,0.32-8.67,0.15c-4.5-0.26-11.75,1.78-12.93-0.97c-2.05-4.8-0.35-10.77,0.91-16.16c0.73-3.11,3.29-1.77,5.16-1.41
	C85.75,196.59,90.92,197.67,95.92,194.92z"/>
<path style="fill:#FAFAFA; transform:scale(0.2)" d="M104.07,159.32c1.52,0.96,1.78,2.29,1.13,3.8c-2.51,5.86-1.92,12.66-6.04,18.04
	c-2.73-4.94-7.69-5.92-12.86-6.5c-3.46-0.39-5.47-1.57-3.48-5.22c0.19-0.36,0.13-0.83,0.27-1.23c1.37-3.99,1.61-9.16,4.45-11.63
	c3.24-2.82,7.31,2.04,11.27,2.62C100.53,159.44,102.32,159.29,104.07,159.32z"/>
<path style="fill:#FAFAFA; transform:scale(0.2)" d="M120.47,125.53c-3.62,5.68-5.05,12.4-9.31,17.79c-2.52-4.19-7.05-5.67-11.38-7.11
	c-3.21-1.07-3.67-2.32-2.04-4.96c2.35-3.81,3.56-8.92,6.95-11.34c4.67-3.33,7.09,3.87,11.44,4.45
	C117.62,124.54,119.03,125.12,120.47,125.53z"/>
<path style="fill:#FCFCFC; transform:scale(0.2)" d="M140.55,93.32c-3.59,4.67-7.17,9.33-10.76,14c-3.76-2.84-7.51-5.68-11.44-8.64
	c0.74-1.07,1.45-2.38,2.43-3.48c3.13-3.51,5.85-8.92,9.69-9.8C133.9,84.63,136.89,90.76,140.55,93.32z"/>
<path style="fill:#FCFCFC; transform:scale(0.2)" d="M165.93,63.81c-2.29,5.91-7.78,9.08-12.36,13.03c-8.42-7.17-8.42-7.17,0.29-13.94
	c0.34-0.27,0.69-0.53,1.03-0.79C161.51,57,161.51,57,165.93,63.81z"/>
<path style="fill:#FAFAFA; transform:scale(0.2)" d="M200.08,40.9c-5.27,3.41-10.53,6.83-15.8,10.24c-4.78-3.83-3.1-6.35,1.77-8.44
	c3.03-1.3,6.04-2.73,8.84-4.43C198.52,36.08,199.48,38.01,200.08,40.9z"/>
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
                                    <button :style="{background:'rgba('+getterProctorBg1+')'}" @click="ShowElement(getterProctorBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterProctorBg2+')'}" @click="ShowElement1(getterProctorBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterProctorBg3+')'}" @click="ShowElement2(getterProctorBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterProctorBg4+')'}" @click="ShowElement3(getterProctorBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterProctorBg5+')'}" @click="ShowElement4(getterProctorBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var Proctor= [
            {top:17 ,left:48},
            {top:230 ,left:111},
            {top:217 ,left:119},
            {top:201 ,left:37},
            {top:162 ,left:38},
            {top:490 ,left:70},
            {top:211 ,left:103},
            {top:276 ,left:11},
            {top:259 ,left:114},
            {top:465 ,left:45},
        ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = Proctor[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  Proctor[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'Proctor'){
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
                getterProctorBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Proctor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterProctorBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Proctor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterProctorBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Proctor') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterProctorBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterProctorBg5: {
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
                            name:'Proctor',
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