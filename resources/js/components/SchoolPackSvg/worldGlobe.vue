<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                   <path style="display:none;fill:#FDFDFD;" d="M0.11,306C0.11,205.63,0.15,105.26,0,4.89C-0.01,0.8,0.8,0,4.89,0
	c200.74,0.13,401.48,0.13,602.21,0c4.09,0,4.9,0.8,4.89,4.89c-0.13,200.74-0.13,401.48,0,602.21c0,4.09-0.8,4.9-4.89,4.89
	c-200.74-0.13-401.48-0.13-602.21,0c-4.09,0-4.9-0.8-4.89-4.89C0.15,506.74,0.11,406.37,0.11,306z"/>
<path :style="{fill:'rgba(235, 240, 243, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M118.34,315.56c-12.74-0.01-25.49,0.12-38.23-0.09c-3.73-0.06-5.82,0.9-7.92,4.33
	c-6,9.8-14.86,15.98-26.71,14.64c-12.32-1.39-20.64-9.07-24.85-20.57c-4.54-12.39,2.59-27.05,15.77-33.67
	c11.98-6.02,26.65-2.32,34.39,10.05c3.48,5.57,7.27,6.33,12.91,6.28c24.89-0.23,49.78-0.15,74.67-0.06
	c2.98,0.01,4.67-0.32,4.97-3.89c1.36-15.78,5.65-30.83,12.18-45.24c1.56-3.44,0.91-5.28-2.6-7.27
	c-22.99-13.02-45.85-26.27-68.67-39.6c-2.56-1.49-4.18-1.61-6.78,0.1c-11.94,7.86-24.01,6.56-34.23-3.29
	c-9.92-9.56-12.12-21.93-5.86-33.05c6.64-11.8,19.53-18.15,30.88-15.2c13.06,3.39,23.32,15.89,22.8,28.61
	c-0.16,3.86,1.18,5.59,4.25,7.34c22.62,12.88,45.2,25.82,67.64,38.99c3.52,2.07,5.09,1.82,7.46-1.54
	c8.79-12.45,19.45-23.2,31.93-31.93c3.83-2.67,3.49-4.43,1.42-7.97c-13.06-22.28-25.92-44.68-38.69-67.13
	c-1.88-3.3-3.84-4.49-7.88-4.37c-14.91,0.42-29.22-14.31-28.91-29.14c0.31-14.93,15.07-28.6,30.08-28.05
	c16.04,0.58,36.65,22.18,22.61,42.98c-1.96,2.9-2,4.87-0.28,7.81c13.33,22.82,26.56,45.69,39.6,68.67c2.04,3.59,3.76,4.03,7.35,2.29
	c13.71-6.65,28.23-10.63,43.4-12.06c4.04-0.38,5.57-1.55,5.52-6.08c-0.27-26.08-0.2-52.17-0.02-78.25c0.03-3.52-1.37-5.05-4.14-6.8
	c-9.71-6.12-16.05-14.75-14.87-26.64c1.2-12.13,8.6-20.35,19.74-24.84c11.87-4.78,25.67,0.88,33.18,13.11
	c7.22,11.75,5.66,26.28-6.25,34.53c-8.14,5.63-8.89,11.81-8.75,20.18c0.37,22.89,0.27,45.8-0.02,68.69
	c-0.06,4.48,1.45,5.77,5.51,6.12c15.4,1.32,30.05,5.58,43.96,12.24c3.24,1.55,4.73,1.12,6.5-1.98
	c13.39-23.47,26.91-46.86,40.49-70.22c1.26-2.17,1.23-3.56-0.21-5.77c-7.34-11.25-7.07-21.33,0.44-31.51
	c7.15-9.68,18.53-14.38,28.59-11.81c11.64,2.98,21.34,13.56,22.88,24.96c2.1,15.52-13.08,32.05-29.36,31.57
	c-3.52-0.1-5.26,0.87-6.95,3.84c-12.98,22.79-26.07,45.51-39.29,68.15c-1.8,3.08-2.14,4.78,1.2,7.11
	c12.83,8.96,23.73,20,32.77,32.76c2.09,2.95,3.54,3.17,6.62,1.37c22.79-13.36,45.67-26.58,68.63-39.66c3.06-1.74,3.8-3.6,3.72-7.02
	c-0.36-15.11,13.84-29.42,28.72-29.35c14.91,0.07,29.09,14.59,28.41,29.63c-0.51,11.35-6.99,19.18-16.57,24.54
	c-9.06,5.06-18.1,4.19-26.44-1.56c-3-2.07-4.95-1.81-7.82-0.13c-22.65,13.22-45.32,26.4-68.14,39.32c-3.52,1.99-4.14,3.84-2.59,7.27
	c6.51,14.41,10.79,29.45,12.21,45.24c0.26,2.92,1.18,3.96,4.32,3.94c26.88-0.14,53.76-0.19,80.64,0.05c3.74,0.03,4.51-2.2,6.02-4.44
	c6.39-9.53,14.92-15.9,26.82-14.59c11.84,1.31,19.98,8.53,24.43,19.44c4.94,12.1-0.72,26.06-13.18,33.65
	c-11.58,7.06-26.33,5.33-34.5-6.63c-5.5-8.05-11.51-8.7-19.67-8.57c-23.29,0.35-46.59,0.16-69.89,0.06
	c-2.94-0.01-4.74,0.26-5.04,3.85c-1.29,15.8-5.67,30.82-12.14,45.25c-1.5,3.34-1.07,5.25,2.52,7.28
	c22.83,12.91,45.49,26.1,68.14,39.32c2.83,1.65,4.77,1.99,7.83-0.04c12.57-8.34,27.22-5.36,36.9,7.05
	c9.17,11.74,8.16,25.86-2.6,36.63c-10.96,10.96-25.37,11.88-37.06,2.21c-7.43-6.15-11.9-13.91-11.34-23.82
	c0.17-2.9-0.88-4.22-3.19-5.55c-23.26-13.35-46.49-26.75-69.65-40.27c-2.62-1.53-3.97-1.3-5.74,1.21
	c-9.27,13.11-20.46,24.39-33.61,33.6c-2.92,2.05-2.57,3.63-1.06,6.22c13.39,23.01,26.78,46.01,39.88,69.19
	c1.96,3.47,4.34,3.17,7.33,3.19c15.06,0.07,29.19,14.51,28.84,29.34c-0.34,14.7-14.78,28.57-29.53,27.89
	c-11.35-0.52-19.23-6.88-24.58-16.5c-5.02-9.03-4.36-18.06,1.47-26.43c2.05-2.94,1.88-4.94,0.2-7.83
	c-13.31-22.82-26.58-45.68-39.6-68.66c-2.07-3.66-3.83-3.91-7.36-2.22c-13.54,6.51-27.83,10.66-42.82,11.91
	c-4.69,0.39-6.13,1.95-6.07,6.84c0.29,25.68,0.23,51.37,0.03,77.06c-0.03,3.67,1.12,5.45,4.18,7.38
	c9.69,6.1,16.02,14.76,14.84,26.66c-1.2,12.15-8.63,20.36-19.76,24.83c-12.01,4.81-26.29-1.23-33.55-13.63
	c-6.87-11.72-4.81-26.28,7.07-34.48c7.46-5.14,8.5-10.66,8.36-18.56c-0.42-23.29-0.24-46.59-0.06-69.89
	c0.03-3.82-0.64-5.65-4.87-6.01c-15.79-1.35-30.85-5.67-45.1-12.56c-3.32-1.61-4.47-0.35-5.93,2.19
	c-13.45,23.43-26.95,46.84-40.52,70.21c-1.25,2.15-1.29,3.53,0.18,5.76c7.28,11.06,7.12,20.95-0.06,31.03
	c-7.11,9.98-18.76,14.94-28.94,12.32c-11.65-2.99-21.37-13.58-22.9-24.95c-2.06-15.33,12.73-31.93,28.72-31.54
	c4.4,0.11,6.23-1.46,8.18-4.89c12.68-22.28,25.48-44.48,38.44-66.59c2.02-3.45,2.5-5.26-1.37-7.98
	c-12.62-8.88-23.42-19.75-32.29-32.41c-2.03-2.9-3.51-3.24-6.63-1.41c-22.97,13.46-46.04,26.74-69.16,39.93
	c-2.67,1.52-3.29,3.16-3.21,6.11c0.41,14.75-12.61,29.07-26.93,29.97c-13.99,0.88-28.82-11.9-30.22-26.04
	c-1.42-14.27,10.8-29.25,25.53-31.15c6.39-0.82,12.39,0.71,17.46,4.57c2.9,2.21,4.94,1.84,7.83,0.16
	c22.64-13.23,45.33-26.39,68.14-39.33c3.48-1.97,4.19-3.79,2.63-7.26c-6.49-14.42-10.89-29.43-12.16-45.24
	c-0.28-3.52-2.01-3.95-5-3.91C145.02,315.65,131.68,315.57,118.34,315.56z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M306.63,316.61c8.78,0,17.57,0.09,26.35-0.05c3.13-0.05,5.03,0.47,4.72,4.26
	c-0.95,11.58-1.78,23.18-2.5,34.78c-0.16,2.63-1.3,3.31-3.68,3.31c-16.91-0.05-33.82-0.07-50.73,0.02
	c-2.84,0.02-3.75-1.03-3.91-3.79c-0.68-11.16-1.45-22.32-2.45-33.46c-0.38-4.23,1.26-5.24,5.19-5.14
	C288.62,316.78,297.63,316.62,306.63,316.61z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M306.09,295.45c-8.56,0-17.13-0.2-25.69,0.09c-4.36,0.15-6.45-0.78-5.98-5.71
	c1.05-10.91,1.83-21.85,2.44-32.8c0.18-3.31,1.61-3.91,4.5-3.89c16.47,0.09,32.94,0.09,49.41,0c2.86-0.02,4.33,0.54,4.52,3.88
	c0.61,10.94,1.39,21.89,2.44,32.8c0.47,4.89-1.52,5.89-5.94,5.73C323.22,295.23,314.65,295.45,306.09,295.45z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M306.1,232.02c-7.02-0.01-14.05-0.16-21.07,0.06c-3.62,0.11-4.74-1.26-4.05-4.63
	c3.57-17.4,7.3-34.8,15.86-50.58c5.91-10.88,12.47-10.9,18.42-0.03c8.62,15.76,12.29,33.18,15.89,50.57
	c0.68,3.3-0.26,4.82-3.99,4.69C320.15,231.86,313.12,232.03,306.1,232.02z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M306.24,380.03c6.8,0,13.62,0.16,20.41-0.07c3.72-0.13,5.31,0.97,4.5,4.83
	c-3.55,16.96-7.36,33.83-15.25,49.44c-0.39,0.78-0.84,1.54-1.31,2.28c-5.88,9.08-11.61,9.12-17.17-0.31
	c-7.1-12.03-10.52-25.48-13.73-38.9c-4.11-17.18-3.95-17.22,13.33-17.27C300.09,380.03,303.16,380.03,306.24,380.03z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M368.08,360.42c-5.44-0.5-13.48,2.07-17.8-1.03c-4.18-3,0.39-8.57,0.51-13.05
	c0.21-8.18,1.35-16.34,1.58-24.51c0.1-3.63,1.16-5.34,6.68-5.19c10.47,0.28,20.96,0.23,31.44,0.03c4.78-0.09,6.84,0.97,6.2,4.66
	c-1.85,10.57-3.43,21.16-5.84,31.69c-1.34,5.85-4.47,8.41-12.59,7.46C375.25,360.12,372.1,360.42,368.08,360.42z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M240.37,318.14c6.36,0,14.09-1.75,18.7,0.49c4.68,2.27,1.58,8.89,2.28,13.57
	c1.26,8.4,1.7,16.87,2.76,25.29c0.44,3.45-1.27,4.37-5.34,4.3c-8.72-0.16-17.45-0.17-26.16,0.01c-4.32,0.09-5.95-1.23-6.91-4.55
	c-3.37-11.63-4.7-23.47-6.49-35.26c-0.52-3.43,1.43-4.43,5.46-4.31c5.22,0.16,10.46,0.04,15.7,0.04
	C240.37,317.87,240.37,318.01,240.37,318.14z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M237.89,295.68c-4.94-0.4-12.94,2.12-17.19-0.97c-4.6-3.34-0.29-9.53,0.19-14.38
	c0.84-8.39,3.35-16.68,5.06-25.02c0.58-2.82,2.57-3.72,6.03-3.67c9.01,0.11,18.03,0.16,27.03-0.03c4.39-0.1,5.43,1.28,5.1,4.49
	c-1.22,11.86-2.3,23.72-3.17,35.6c-0.21,2.87-1.29,4.14-5.1,4.02C250.33,295.55,244.8,295.68,237.89,295.68z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M374.68,295.97c-6.77,0-15.01,1.76-19.94-0.47c-5.56-2.51-1.9-9.2-2.77-14.02
	c-1.46-8.09-1.73-16.3-2.88-24.43c-0.53-3.75,1.4-4.87,6.14-4.59c3.68,0.21,7.39,0.06,11.09,0.05c23.04-0.04,23.16-0.05,26.68,16.85
	c1.5,7.17,2.23,14.43,3.57,21.62c0.69,3.72-0.53,5.58-6.19,5.27c-5.21-0.28-10.47-0.06-15.72-0.06
	C374.68,296.12,374.68,296.05,374.68,295.97z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M396.8,251.15c9.92,0,18.89,0.18,27.85-0.08c3.96-0.12,5.32,1.59,6.41,4.46
	c4.35,11.43,7.6,23.03,8.92,35.09c0.39,3.59-0.68,4.35-4.3,4.28c-6.93-0.14-13.86-0.03-20.79-0.03c-11.03,0-11.44,0.02-12.2-9.41
	C401.76,274.1,399.16,263.02,396.8,251.15z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M217.59,361.74c-9.86,0-19.04-0.1-28.21,0.05c-3.26,0.06-4.19-1.65-5.06-3.97
	c-4.43-11.69-7.59-23.6-8.9-35.97c-0.4-3.84,1.1-4.19,4.35-4.16c8.71,0.09,17.42,0.07,26.14,0.01c2.77-0.02,4.53,0.29,4.89,3.54
	C212.28,334.63,213.88,348.01,217.59,361.74z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M396.58,360.41c3.66-13.55,5.42-26.61,6.87-39.68c0.37-3.36,1.87-4.12,5.27-4.06
	c8.98,0.14,17.97,0.14,26.95,0.01c3.63-0.05,4.7,0.7,4.31,4.28c-1.3,12.06-4.6,23.65-8.93,35.08c-1.08,2.87-2.44,4.57-6.41,4.45
	C415.7,360.23,406.72,360.41,396.58,360.41z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M193.05,293.61c-1.99,0.01-3.98,0.01-5.97,0.01c-12.53-0.01-12.71-0.03-10.85-11.13
	c1.63-9.71,4.37-19.19,7.82-28.51c1.26-3.4,3.16-4.59,7.01-4.46c7.2,0.25,14.43,0.19,21.64,0c3.52-0.09,4.92,0.49,3.92,4.15
	c-3.11,11.32-4.43,22.93-5.55,34.51c-0.44,4.6-2.27,5.82-6.82,5.48C200.54,293.38,196.79,293.61,193.05,293.61z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M287.3,176.76c-7.25,16.02-12.18,32.37-15.61,49.02c-0.52,2.52-1.99,4-5.77,3.92
	c-8.68-0.18-17.38-0.06-27.3-0.06C249.3,208.29,263.44,189.91,287.3,176.76z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M325.67,176.76c16.07,7.86,26.28,17.33,35.43,27.55c6.12,6.84,10.83,14.22,15.45,21.64
	c1.91,3.08,2.37,5-3.79,4.76c-7.37-0.29-14.77-0.15-22.15-0.03c-3.52,0.06-5.99-0.55-6.61-3.4
	C340.36,210.54,334.93,194.13,325.67,176.76z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M325.62,436.33c8.06-15.37,13.15-29.49,16.81-43.92c2.59-10.19,2.82-10.15,17.29-10.15
	c19.98,0.01,20.23,0.1,11.38,13.26C360.63,411.07,347.39,425.05,325.62,436.33z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M284.81,437.39c-19.13-10.52-31.55-24.62-41.44-40.25c-8.41-13.28-8.16-13.38,10.66-13.38
	c2.61,0,5.25,0.2,7.83-0.04c4.74-0.43,6.77,1.2,7.47,4.8c3.08,15.83,7.79,31.33,15.45,46.21
	C285.06,435.3,284.81,436.03,284.81,437.39z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M199.4,229.63c13.85-19.51,30.2-34.39,51.58-44.78c-2.71,4.03-5.43,8.06-8.13,12.1
	c-6,8.97-11.09,18.36-14.91,28.29c-1.26,3.27-3.15,4.64-7.05,4.47C214.26,229.42,207.58,229.63,199.4,229.63z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M362.48,184.62c21.78,10.5,38.56,25.45,52.84,44.67c-8.89,0-16.25-0.17-23.58,0.07
	c-3.76,0.13-4.79-1.9-5.78-4.3C380.03,210.75,371.7,197.56,362.48,184.62z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M249.56,428.8c-21.09-10.43-37.3-25.51-51.32-45.01c8.8,0,16.31,0.06,23.82-0.03
	c2.57-0.03,3.43,1.48,4.13,3.22C232.15,401.75,240.27,415.47,249.56,428.8z"/>
<path :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M361.31,428.02c9.33-13.1,17.74-26.48,23.7-41c0.92-2.24,2.15-3.86,5.45-3.77
	c7.36,0.2,14.74,0.06,23.48,0.06C400.07,402.63,383,417.34,361.31,428.02z"/>
<circle :style="{fill:'rgba(68, 196, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" cx="306.47" cy="47.84" r="20.56"/>
<circle :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" cx="177.47" cy="82.64" r="20.65"/>
<circle :style="{fill:'rgba(252, 212, 98, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" cx="435.41" cy="81.64" r="21.48"/>
<circle :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" cx="529.65" cy="176.58" r="21.29"/>
<circle :style="{fill:'rgba(68, 196, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" cx="563.8" cy="306" r="21.45"/>
<circle :style="{fill:'rgba(252, 212, 98, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" cx="82.8" cy="176.58" r="21.86"/>
<circle :style="{fill:'rgba(68, 196, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" cx="48.8" cy="306" r="22.69"/>
<circle :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" cx="82.8" cy="434.39" r="21.86"/>
<circle  :style="{fill:'rgba(252, 212, 98, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" cx="177.28" cy="528.8" r="22.13"/>
<circle :style="{fill:'rgba(68, 196, 161, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" cx="306.47" cy="564.31" r="20.56"/>
<circle :style="{fill:'rgba(39, 162, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" cx="434.41" cy="528.8" r="20.48"/>
<circle :style="{fill:'rgba(252, 212, 98, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" cx="530.4" cy="435.27" r="22.28"/>
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
                                    <button :style="{background:'rgba('+getterWorldGlobeBg1+')'}" @click="ShowElement(getterWorldGlobeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterWorldGlobeBg2+')'}" @click="ShowElement1(getterWorldGlobeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterWorldGlobeBg3+')'}" @click="ShowElement2(getterWorldGlobeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterWorldGlobeBg4+')'}" @click="ShowElement3(getterWorldGlobeBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <!-- <button :style="{backgroundColor:'rgba('+getterWorldGlobeBg5+')'}" @click="ShowElement4(getterWorldGlobeBg5)" :class="this.ValueId+'_color5btn'"></button> -->
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
        var WorldGlobe= [
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
            var randomNumber = WorldGlobe[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  WorldGlobe[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'WorldGlobe'){
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
                getterWorldGlobeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'WorldGlobe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWorldGlobeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'WorldGlobe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWorldGlobeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'WorldGlobe') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterWorldGlobeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterWorldGlobeBg5: {
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
                            name:'WorldGlobe',
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