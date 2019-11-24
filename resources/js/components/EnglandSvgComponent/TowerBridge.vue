<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g style="transform: scale(0.7);">
                    <path :style="{fill:'rgba(127, 174, 229, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color5'" d="M87.7,568c10.3-10.4,20.6-20.8,30.9-31.2c1.4-1.4,2.7-3,4.1-4.5c8.6,0,17.2,0,25.8,0
	c-10,10.1-19.9,20.3-29.9,30.4c-1.7,1.7-3.3,3.6-4.9,5.4C105.1,568,96.4,568,87.7,568z M217.2,532.3c-10.3,10.4-20.6,20.7-30.8,31.1
	c-1.4,1.5-2.7,3.1-4.1,4.6c-8.7,0-17.3,0-26,0c10.3-10.4,20.5-20.7,30.7-31.1c1.4-1.5,2.7-3,4.1-4.6c1-1.3,2.4-1.8,3.9-1.7
	C202.5,530.9,210.1,528.4,217.2,532.3z M421.9,532.2c-10,10.1-19.9,20.3-29.9,30.4c-1.7,1.7-3.3,3.6-4.9,5.4c-8.7,0-17.3,0-26,0
	c10.3-10.4,20.5-20.7,30.8-31.1c1.4-1.5,2.7-3,4.1-4.6c6.3-3.1,12.7-2.8,19.1-0.2C417.3,532.1,419.6,532.1,421.9,532.2z
	 M490.5,532.2c-10,10.1-20,20.3-29.9,30.4c-1.7,1.7-3.2,3.6-4.8,5.4c-8.7,0-17.3,0-26-0.1c10.3-10.4,20.6-20.8,30.8-31.2
	c1.4-1.5,2.7-3.1,4.1-4.6C473.2,532.2,481.8,532.2,490.5,532.2z M353.3,532.3c-10.3,10.4-20.5,20.7-30.8,31.1
	c-1.4,1.5-2.7,3-4.1,4.6c-8.7,0-17.3,0-26,0c9.9-10.8,20.6-20.9,31.4-30.8c1.6-1.5,3-3.2,4.6-4.9c1.2-1.7,3.2-2,5-1.9
	C340,530.9,347,528.5,353.3,532.3z M19.1,568c10.6-10.4,21.3-20.8,31.9-31.3c1.4-1.4,2.7-3,4.1-4.6c8.3,0,16.5,0,24.8,0
	c-10,10.1-19.9,20.3-29.9,30.4c-1.7,1.7-3.3,3.6-4.9,5.4C36.4,568,27.8,568,19.1,568z M225,567.9c10.2-10.4,20.5-20.7,30.7-31.1
	c1.4-1.5,2.7-3,4.1-4.5c1-1.3,2.4-1.8,3.9-1.8c7.4,0.4,15-2.1,22.1,1.7c-10.6,10.4-21.2,20.8-31.8,31.2c-1.4,1.4-2.7,3-4.1,4.5
	C241.6,567.9,233.3,567.9,225,567.9z M558.1,532.2c-10,10.1-19.9,20.3-29.9,30.4c-1.7,1.7-3.3,3.6-4.9,5.3c-8.3,0-16.6,0-24.9,0
	c10.3-10.4,20.6-20.7,30.8-31.1c1.4-1.5,2.7-3.1,4.1-4.6C541.5,532.2,549.8,532.2,558.1,532.2z"/>
<path :style="{fill:'rgba(73, 140, 219, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color4'" d="M136.1,181.2c102,0,204,0,306,0c3,6,2.3,12,0.4,18.1c-5.9,3-12.1,1.1-18.2,1.5
	c-6,0.2-12.1,0.2-18.1,0c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0
	c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0
	c-6,0.2-12,0.2-18,0c-6,0.2-12,0.2-18,0c-6,0.2-12.1,0.2-18.1,0c-6.1-0.3-12.3,1.4-18.2-1.4C133.8,193.3,133.2,187.2,136.1,181.2z
	 M292.5,568c-14.2,0-28.4,0-42.6-0.1c-0.6-2.3,1.1-3.4,2.4-4.7c10-10.3,20.3-20.4,31.1-29.9c1.3-1.1,2.6-2.1,4.3-2.5
	c13-0.6,25.9-0.7,38.9,0c2.6,0.7,2.6,2.2,1.3,4.1c-1.1,1.5-2.4,2.9-3.8,4.1c-9.5,8.1-18.1,17.1-26.9,25.9
	C295.7,566.3,294.1,567.2,292.5,568z M148.5,532.2c4.9-0.1,9.8-0.1,14.8-0.2c2.7-2.2,5.9-1.6,9-1.6c5.7,0,11.4-0.5,17.1,0.4
	c4.7,2.1,1.2,4.3-0.2,5.8c-6.8,7.2-13.9,14.2-21,21.1c-3.7,3.6-6.7,8.1-11.7,10.2c-14.2,0-28.4,0-42.6,0c-0.6-2,0.9-3.2,2-4.3
	c9.5-9.6,19.1-19.1,28.6-28.7C145.5,533.8,147.1,533.1,148.5,532.2z M79.9,532.2c14.3,0,28.5,0,42.8,0c0.6,2-0.9,3.1-2,4.3
	c-9.5,9.7-19.2,19.2-28.7,28.8c-1.2,1.2-2.7,2-4.2,2.7c-14.2,0-28.4,0-42.6,0c-0.6-2,0.9-3.2,2-4.3c9.5-9.6,19.1-19.1,28.6-28.7
	C76.9,533.8,78.5,533.1,79.9,532.2z M225,567.9c-14.2,0-28.4,0.1-42.6,0.1c-0.6-2.3,1.1-3.4,2.3-4.7c9.8-9.9,19.7-19.8,29.6-29.7
	c1.3-1.3,2.8-2.5,4.7-2.9c13-0.6,25.9-0.7,38.9,0c4.7,2.1,1.3,4.3-0.2,5.8c-6.8,7.2-13.9,14.2-21,21.1
	C233,561.3,230,565.8,225,567.9z M361.1,568c-14.2,0-28.4,0-42.6,0c-0.6-2.3,1.1-3.4,2.3-4.7c9.8-9.9,19.7-19.8,29.6-29.6
	c1.3-1.3,2.8-2.5,4.7-2.8c13-0.6,25.9-0.7,38.9,0c4.7,2.1,1.3,4.3-0.2,5.8c-6.8,7.2-13.9,14.2-21,21.1
	C369.1,561.3,366.1,565.8,361.1,568z M421.9,532.2c14.3,0,28.5,0,42.8,0c0.7,2-0.8,3.1-1.9,4.3c-9.5,9.7-19.2,19.2-28.8,28.8
	c-1.2,1.2-2.7,2-4.2,2.7c-14.2,0-28.4,0-42.6,0c-0.6-2,0.9-3.2,2-4.3c9.5-9.6,19.1-19.1,28.6-28.7
	C418.9,533.8,420.5,533.1,421.9,532.2z M490.5,532.2c14.3,0,28.5,0,42.8,0c0.7,2-0.8,3.1-1.9,4.3c-9.5,9.7-19.2,19.2-28.7,28.8
	c-1.2,1.2-2.7,2-4.2,2.6c-14.2,0-28.4,0.1-42.6,0.1c-0.7-2,0.8-3.1,1.9-4.3c9.5-9.6,19.1-19.2,28.7-28.8
	C487.5,533.8,489.1,533.1,490.5,532.2z M558.1,532.2c3.3,0,6.6,0,9.9,0c0.1,10.1,0.1,20.1,0.2,30.2c0,3.9-1.8,5.8-5.7,5.8
	c-13-0.1-26.1-0.1-39.1-0.2c-0.6-2,0.8-3.1,2-4.3c9.5-9.6,19.1-19.2,28.7-28.8C555.1,533.7,556.7,533.1,558.1,532.2z M10.3,532.1
	c14.9,0,29.8,0,44.8,0c0.7,2-0.8,3.1-1.9,4.3c-10,10.1-19.9,20.3-30.7,29.6c-1,0.9-2.3,1.3-3.4,2c-8.5,0.3-9-0.2-9-8.5
	C10.2,550.4,10.2,541.3,10.3,532.1z M161.1,451.3c45.9-0.1,91.7-0.2,137.6-0.2c39.5,0,79,0.1,118.5,0.2c-4,5.5-1.1,11.9-2,17.8
	c-2,1.9-4.5,1.7-6.9,1.7c-22.1,0-44.2,0-66.4,0c-2.8,0-5.5-0.3-9.2-1.5c12,3.4,22.6,7.4,33.2,11.2c14,4.9,28,9.7,41.9,14.8
	c1.9,0.7,4,1.2,5.1,3.2c3.5,2.1,2.1,5.5,2.3,8.4c0.2,2.4,0.1,4.8,0.1,7.2c0,1.5-0.1,3-0.1,4.5c-2.3,1.1-4.4,0-6.5-0.8
	c-36-12.6-72.1-25.1-108-38.2c-8.2-3-15.2-2.9-23.2,0c-35.2,12.9-70.6,24.8-106,37.2c-2.6,0.9-5.1,2.5-8.1,1
	c-0.1-1.3-0.2-2.6-0.3-3.9c0.8-5.2-1.2-10.5,1.3-15.5c1-2.1,3.1-2.6,5-3.3c22.6-8,45.2-15.7,67.7-23.7c2.6-0.9,5.5-0.8,7.9-2.2
	c0.6-0.5-0.7-0.6-0.1-0.1c0.2,0.2,0.1,0.3-0.3,0.4c-2.7,0.8-5.5,1.1-8.3,1.1c-22.1,0-44.1,0-66.2,0c-2.4,0-4.9,0.2-6.9-1.6
	C162.3,463.2,165.1,456.8,161.1,451.3z M298.1,226.1c6,0,12.1,0,18.1,0s11.9,0,17.9,0s12.1,0,18.1,0s11.9,0,17.9,0s12.1,0,18.1,0
	s11.9,0,17.9,0s12.1,0,18.1,0s12,0.1,18,0.1c0,5.9,0,11.9,0,17.8c-72.3,0-144.5,0.1-216.8,0.1c-29.8,0-59.5-0.1-89.3-0.1
	c0-5.9,0-11.9,0-17.8c6,0,12-0.1,18-0.1s12.1,0,18.1,0s11.9,0,17.9,0s12.1,0,18.1,0s11.9,0,17.9,0s12.1,0,18.1,0s11.9,0,17.9,0
	s12.1,0,18.1,0C286.1,226.1,292.1,226.1,298.1,226.1z"/>
<path :style="{fill:'rgba(225, 225, 239, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M512.9,122c-2-9.6-4.1-19.3-6.2-28.9c-5.5-25.5-11.9-50.9-9.4-77.4c0.4-4.5-1.3-5.7-5.7-5.7
	c-4.4,0-5.7,1.2-5.7,5.7c-0.1,16,1,32-3.1,47.9c-4.9,19.1-8.3,38.5-12.4,57.8c-0.2,1.1,0.6,3.6-2.2,2.3c-0.2,2.8,1.5,3.4,3.9,3.4
	c13,0,26.1,0,39.1,0c2.4,0,4.1-0.6,3.9-3.4C513,124.8,513.2,123.3,512.9,122z M98.3,84.3c-4.1-18.1-7.4-36.2-6.1-54.8
	c0.3-5,0.1-10.1,0-15.2c0-1.6,0.3-3.3-1.9-4.1c-5.9-1.9-9.6,0.3-9.2,6.3c1.5,25.9-1.6,51.4-7.9,76.5c-2.8,11.2-5.6,22.4-6.8,33.9
	c13.5,0,27.1,0,40.6,0C105,112.5,101.5,98.4,98.3,84.3z M109.1,226c0-26.9,0-53.8,0-80.7c-15,0-29.9,0-44.9,0c0,26.9,0,53.8,0,80.7
	C79.1,226,94.1,226,109.1,226z M514.1,145.3c-15,0-29.9,0-44.9,0c0,26.9,0,53.8,0,80.7c15,0,29.9,0,44.9,0
	C514.1,199.1,514.1,172.2,514.1,145.3z M110.9,359.7c0-2.6,0.2-5.3-1.8-7.4c-15,0-29.9,0-44.9,0c0,26.9,0,53.8,0,80.7
	c15,0,29.9,0,44.9,0c2.1-2.1,1.8-4.8,1.9-7.4C111,403.6,111,381.6,110.9,359.7z M467.3,359.7c-0.1,22-0.1,44,0,65.9
	c0,2.6-0.2,5.3,1.9,7.4c15,0,29.9,0,44.9,0c0-26.9,0-53.8,0-80.7c-15,0-29.9,0-44.9,0C467.1,354.4,467.3,357.1,467.3,359.7z
	 M469.2,244.3c-3.4,5.7-1.2,11.9-1.7,17.9c-0.2,6.1-0.2,12.2,0,18.3c-0.3,15.7-0.1,31.5-0.1,47.2c0,2.2,0,4.5,1.8,6.3
	c15,0,29.9,0,44.9,0c0-18,0.1-36,0.1-54c0-5.9,0-11.8,0-17.8s-0.1-12-0.1-18C499.1,244.3,484.1,244.3,469.2,244.3z M109.1,244.3
	c-15,0-29.9,0-44.9,0c0,6-0.1,12-0.1,18c0,5.9,0,11.8,0,17.8c0,18,0.1,36,0.1,54c15,0,29.9,0,44.9,0c1.8-1.7,1.8-4,1.8-6.2
	c0-15.8,0.2-31.6-0.1-47.4c0.2-6.1,0.2-12.2,0-18.2C110.3,256.2,112.4,250,109.1,244.3z"/>
<path :style="{fill:'rgba(203, 203, 227, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M541.1,451.1c6.7,0,13.5,0.1,20.2-0.1c4.7-0.1,6.9,1.6,6.9,6.5c-0.1,18.9-0.1,37.8-0.1,56.6
	c-2.2,1.9-4.9,1.7-7.5,1.7c-46,0-92.1,0-138.1,0c-2.2,0-4.5,0-6.6-0.9c-2.2-1.4-2.3-3.7-2.2-5.8c0-3.7-0.6-7.3-1.2-10.9
	c2.1-9.7,0.5-19.5,1.1-29.2c-0.2-3.8-0.2-7.7,0-11.5c0.1-3.1,1-5.8,4-7.3c8.3-1.8,16.6-0.6,24.9-0.8c30.8-0.4,61.6-0.1,92.4-0.1
	C537.1,449.3,539.3,449.5,541.1,451.1z M10.2,514.2c0-18.9,0-37.8-0.2-56.7c0-4.9,2.2-6.6,6.9-6.5c6.7,0.2,13.5,0,20.2,0
	c1.8-1.7,4.1-1.8,6.3-1.8c30.8,0,61.5-0.3,92.3,0.1c8.3,0.2,16.6-1,24.9,0.8c3,1.5,3.9,4.2,4.1,7.3c0.2,3.9,0.2,7.7,0,11.6
	c0.3,9.7-0.2,19.5,0.4,29.2c-1.1,5.4,1.4,11.4-2.4,16.5c-2.6,1.4-5.4,1.2-8.2,1.2c-45.2,0-90.5,0-135.7,0
	C15.9,515.9,12.8,516.4,10.2,514.2z M37.2,145c9,0.1,18,0.2,26.9,0.3c2,2.1,1.7,4.8,1.8,7.4c0.1,22.2,0.1,44.3,0,66.5
	c0,2.4,0.1,4.9-1.4,7c-9.1,2.8-18.2,2.7-27.3,0.1C37.2,199.2,37.2,172.1,37.2,145z M109.1,145.3c9-0.1,18-0.2,26.9-0.3
	c0,12.1,0.1,24.1,0.1,36.2c0,6,0,12,0,17.9c2.9,9,2.7,18.1,0.2,27.2c-9.1,2.8-18.3,2.6-27.5,0.1c-1.8-2.5-1.5-5.3-1.5-8.1
	c0-21.7,0-43.3,0-65C107.3,150.5,106.9,147.6,109.1,145.3z M442.2,145c9,0.1,18,0.2,26.9,0.3c1.9,1.9,1.7,4.4,1.7,6.8
	c0.1,22.5,0.1,45.1,0,67.6c0,2.2,0,4.5-1.4,6.5c-9.1,2.8-18.3,2.6-27.5,0.1c-2.8-9.1-2.9-18.2,0-27.3c0-6,0-11.9,0-17.9
	C442.1,169.1,442.2,157.1,442.2,145z M514.1,145.3c9-0.1,18-0.2,26.9-0.3c0,27.1,0,54.2,0,81.2c-9.1,2.7-18.1,2.6-27.2,0.1
	c-1.7-2.3-1.5-5-1.5-7.5c0-22,0-44,0-66.1C512.3,150.1,512.1,147.4,514.1,145.3z M37.2,433.2c0-27.1,0-54.2,0-81.2
	c9.1-2.7,18.1-2.6,27.2-0.1c1.8,2.5,1.5,5.3,1.5,8.1c0,21.7,0,43.3,0,65c0,2.8,0.3,5.6-1.4,8.2C55.5,436,46.4,435.9,37.2,433.2z
	 M541,352c0,27.1,0,54.2,0,81.3c-9.1,2.7-18.1,2.6-27.2,0.1c-1.8-2.5-1.5-5.3-1.5-8.1c0-21.7,0-43.3,0-65c0-2.8-0.3-5.6,1.4-8.2
	C522.8,349.2,531.9,349.3,541,352z M64.2,334c-9,0.1-18,0.2-26.9,0.3c0-18.1,0-36.2,0-54.2c9.1-2.8,18.1-2.6,27.2-0.1
	c1.7,2.3,1.5,4.9,1.5,7.5c0,13,0.1,26.1,0,39.1C65.9,329.1,66.2,331.8,64.2,334z M541,334.2c-9-0.1-18-0.2-26.9-0.3
	c-1.7-1.8-1.7-4.1-1.7-6.3c-0.1-13.9-0.1-27.9,0-41.8c0-2,0.1-4.1,1.4-5.9c9.1-2.7,18.2-2.7,27.3,0C541,298.1,541,316.2,541,334.2z
	 M514.1,244.3c9-0.1,18-0.2,26.9-0.3c0,6.1,0,12.2,0,18.3c-2.7,2.2-6,1.8-9,1.6c-6-0.3-12.2,1.3-18-1.4
	C511.6,256.4,511.3,250.3,514.1,244.3z M64,262.3c-8.9,0-17.9,0-26.8,0c0-6.1,0-12.2,0-18.3c9,0.1,18,0.2,26.9,0.3
	C66.7,250.3,66.9,256.3,64,262.3z M469.2,244.3c0,6-0.1,12-0.1,18c-8.9,2.6-17.9,2.6-26.8,0c-0.1-6-0.1-12-0.2-18
	C451.1,244.3,460.1,244.3,469.2,244.3z M109.1,432.9c0-26.9,0-53.8,0-80.7c9-0.1,18-0.2,26.9-0.3c0,27.1,0,54.2,0,81.3
	C127,433.1,118.1,433,109.1,432.9z M109.1,334c0-18,0.1-36,0.1-54c8.9-2.6,17.9-2.6,26.8,0c0,18.1,0,36.2,0,54.3
	C127,334.2,118.1,334.1,109.1,334z M469.2,352.3c0,26.9,0,53.8,0,80.7c-9,0.1-18,0.2-26.9,0.3c0-27.1,0-54.2,0-81.3
	C451.2,352.1,460.2,352.2,469.2,352.3z M469.1,280c0,18,0.1,36,0.1,54c-9,0.1-18,0.2-26.9,0.3c0-18.1,0-36.2,0-54.2
	C451.2,277.3,460.1,277.3,469.1,280z M109.2,262.3c0-6-0.1-12-0.1-18c9,0,18.1,0,27.1,0c-0.1,6-0.1,12-0.2,17.9
	C127.1,264.9,118.1,264.9,109.2,262.3z"/>
<path :style="{fill:'rgba(20, 53, 172, 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M443.3,245.2c8.7,1.3,17.5,0.4,26.3,0.6c14.8,0.3,29.7,0.2,44.6,0c6.9,0.3,13.8,0.1,20.7,0.1
	c2.2,0,4.5-0.1,6.2-1.9c0-5.9,0-11.8,0-17.8c-9-0.1-18-0.2-26.9-0.3c-1.7-1.5-3.7-1.6-5.8-1.6c-11.1-0.1-22.3-0.1-33.4,0
	c-2,0-4.1,0.1-5.8,1.6c-9,0-18.1,0-27.1,0c-0.2,0.3-0.5,0.5-0.7,0.8c-1.3,5.8-1.5,11.5,0.2,17.2C442,244.5,442.6,244.9,443.3,245.2z
	 M353.9,207.1c0.2-2.7,0.3-5.6-1.7-7.9c-6,0-12.1,0-18.1,0c-2.9,9.1-2.6,18.2-0.2,27.3c6.2,2.2,12.4,2.4,18.6-0.1
	C355.3,220.1,353.5,213.5,353.9,207.1z M424.5,226.3c2.8-6.2,1-12.8,1.4-19.2c0.2-2.7,0.3-5.6-1.7-7.9c-6,0-12.1,0-18.1,0
	c-2.9,9.1-2.6,18.2-0.2,27.3C412.1,228.7,418.3,228.8,424.5,226.3z M370.1,226.1c6,2.8,12.1,2.8,18.1,0c0-9,0-18,0-26.9
	c-6,0-12.1,0-18.1,0C370.1,208.1,370.1,217.1,370.1,226.1z M209.9,207.1c0.2-2.7,0.3-5.6-1.7-8c-6,0-12.1,0-18.1,0
	c-2.9,9.1-2.6,18.2-0.2,27.3c6.2,2.2,12.4,2.4,18.6-0.1C211.3,220.1,209.5,213.5,209.9,207.1z M173.9,207.1c0.2-2.7,0.3-5.6-1.7-8
	c-6,0-12.1,0-18.1,0c0,9,0,18,0,26.9c6.1,2.9,12.2,2.6,18.4,0.2C175.3,220.1,173.5,213.5,173.9,207.1z M245.9,207.1
	c0.2-2.7,0.3-5.6-1.7-8c-6,0-12.1,0-18.1,0c0,9,0,18,0,26.9c6.1,2.9,12.2,2.6,18.4,0.2C247.3,220.1,245.5,213.5,245.9,207.1z
	 M281.9,207.1c0.2-2.7,0.3-5.6-1.7-8c-6,0-12.1,0-18.1,0c0,9,0,18,0,26.9c6.1,2.9,12.2,2.6,18.4,0.2
	C283.3,220.1,281.5,213.5,281.9,207.1z M298.1,199.2c0,9,0,18,0,26.9c6,2.8,12.1,2.8,18.1,0c0-9,0-18,0-26.9
	C310.1,199.2,304.1,199.2,298.1,199.2z M43.5,146.9c6.9,0,13.8,0.2,20.7-0.1c15,0.2,29.9,0.2,44.9,0c6.9,0.3,13.8,0.1,20.7,0.1
	c2.2,0,4.5-0.1,6.2-1.9c0-6.3,0.9-12.9-0.3-19c-2.6-13.5-6.2-26.8-9.4-40.2c-0.5-2.2-0.8-4.7-3.8-4.6s-3.2,2.6-3.7,4.8
	c-2.8,12.3-5.7,24.7-8.6,37c-0.4,1.9-0.1,4.4-3.4,4c-13.5-2.7-27.1-2.7-40.6,0c-3.2,0.4-2.9-2-3.4-4C60,110.3,57,97.6,54.2,84.9
	c-0.5-2-1.2-3.6-3.4-3.7c-2-0.1-3.1,1.2-3.5,3c-4,20.2-12.1,39.7-10,60.9C39,146.8,41.2,146.9,43.5,146.9z M448.5,146.9
	c6.9,0,13.8,0.2,20.7-0.1c15,0.2,29.9,0.2,44.9,0c6.9,0.3,13.8,0.1,20.7,0.1c2.2,0,4.5-0.1,6.2-1.9c-0.1-6.5,0.7-13.2-0.4-19.6
	c-2.5-13.2-6-26.2-9.1-39.2c-0.6-2.3-0.7-5.2-4.1-5c-2.9,0.2-3.1,2.8-3.6,5c-2.9,12.5-5.8,25.1-8.7,37.6c-0.7,1.8-2.1,1.7-3.7,1.7
	c-13.2,0-26.4,0-39.6,0c-1.6,0-3,0.1-3.7-1.7c-0.5-2-0.9-4-1.4-6c-2.5-10.9-5.1-21.8-7.6-32.7c-0.4-2-1.1-3.7-3.3-3.9
	c-2.3-0.2-3.3,1.4-3.7,3.4c-4,20-12,39.4-9.9,60.5C444,146.8,446.2,146.9,448.5,146.9z M561.3,514.1c-48.7,0-97.4-0.1-146.1-0.1
	c-1.6,1.3-1.5,3.1-1.8,4.9c0.3,4.5-1.1,9.3,1.5,13.6c2.2,1.7,4.9,1,7.4,1.4c14.1,0.1,28.2,0,42.3,0c8.7,0.2,17.3,0,26,0
	c14.2,0.1,28.3,0.1,42.5,0c8.2,0.2,16.4,0.1,24.6,0c3.5-0.1,7.1,0.8,10.2-1.6c0-6,0.1-11.9,0.1-17.9
	C565.8,514.2,563.5,514.1,561.3,514.1z M163,514c-6,0-12,0.1-18,0.1c-44.9,0-89.9,0.1-134.8,0.1c0,6,0,11.9,0.1,17.9
	c2.3,2.2,5.2,1.7,7.9,1.8c12.3,0,24.5,0.1,36.8-0.1c8.3,0.2,16.7-0.1,25,0c14.2,0.1,28.3,0.1,42.5,0c8.6,0.2,17.3,0,25.9,0
	c5-0.3,10.1,1.1,14.9-1.4c2.6-4.7,1.3-9.7,1.3-14.6C164.5,516.4,164.3,515,163,514z M130,332.4c-7,0-14-0.2-21,0.1
	c-15-0.2-29.9-0.2-44.9,0c-6.9-0.3-13.8-0.1-20.7-0.1c-2.2,0-4.5,0.1-6.2,1.9c0,5.9,0,11.8,0,17.7c9,0.1,18,0.2,26.9,0.3
	c1.8,1.6,4.1,1.6,6.4,1.6c12.9,0,25.7,0.2,38.6-0.1c6.1,0.3,12.2,0.1,18.3,0.1c3.1,0,6.3,0.5,9.1-1.6c2.2-6.2,2.3-12.4-0.2-18.5
	C134.4,332.4,132.2,332.4,130,332.4z M448.3,353.9c7,0,14,0.2,21-0.1c13,0.3,26,0.1,39,0.1c2.1,0,4.1-0.1,5.8-1.6
	c9-0.1,18-0.2,26.9-0.3c0-5.9,0-11.8,0-17.7c-1.7-1.8-4-1.9-6.3-1.9c-6.9,0-13.8-0.2-20.7,0.1c-15-0.2-29.9-0.2-44.9,0
	c-6.1-0.3-12.2-0.1-18.3-0.1c-3.1,0-6.3-0.5-9.1,1.6c-2.2,6.2-2.3,12.4,0.2,18.5C443.8,353.9,446.1,353.9,448.3,353.9z M64.2,432.9
	c-9,0.1-18,0.2-26.9,0.3c0,6,0,11.9-0.1,17.9c33,0,66,0,99,0c2.8-6.1,2.5-12.2,0.2-18.3c-1.9-1.4-4.1-1.4-6.3-1.4
	c-7,0-14-0.2-21,0.1c-13-0.3-26-0.1-39-0.1C67.9,431.4,65.9,431.5,64.2,432.9z M452,431.4c-3.4,0-7-0.7-10.2,1.5
	c-2.1,6.1-2.6,12.2,0.3,18.2c33,0,66,0,98.9,0c0-6-0.1-11.9-0.1-17.9c-9-0.1-18-0.2-26.9-0.3c-1.7-1.5-3.7-1.6-5.8-1.6
	c-13,0-26.1-0.2-39.1,0.1C463.4,431.2,457.7,431.3,452,431.4z M109.1,226c-1.7-1.5-3.7-1.6-5.8-1.6c-11.1-0.1-22.3-0.1-33.4,0
	c-2,0-4.1,0.1-5.8,1.6c-9,0.1-18,0.2-26.9,0.3c0,5.9,0,11.8,0,17.7c1.7,1.8,4,1.9,6.3,1.9c6.9,0,13.8,0.2,20.7-0.1
	c14.9,0.2,29.8,0.2,44.6,0c8.8-0.2,17.7,0.9,26.4-0.7c0.7-0.3,1.2-0.8,1.6-1.4c1.4-5.7,1.4-11.4,0-17c-0.2-0.3-0.4-0.5-0.7-0.8
	C127.2,225.9,118.1,226,109.1,226z M64.3,261.8c-7.4-2.8-15-1-22.5-1.3c-1.7-0.1-3.3,0.5-4.5,1.8c0,5.9,0,11.8,0,17.8
	c8.9,0,17.9,0,26.8,0C67.1,274,66.6,267.9,64.3,261.8z M514.2,280c8.9,0,17.9,0,26.8,0c0-5.9,0-11.8,0-17.7c-8.9,0-17.9,0-26.8,0
	C511.4,268.2,511.4,274.1,514.2,280z M442.2,280c8.9,0,17.9,0,26.8,0c0-5.9,0-11.8,0-17.7c-8.9,0-17.9,0-26.8,0
	C442.2,268.2,442.2,274.1,442.2,280z M136,262.3c-8.9,0-17.9,0-26.8,0c0,5.9,0,11.8,0,17.8c8.9,0,17.9,0,26.8,0
	C136,274.1,136,268.2,136,262.3z M95.3,181.3c4.1,0,5.4-1.4,4.9-5.2c-0.2-1.3,0-2.6,0-3.9c0-1.1-0.1-2.2,0-3.4
	c0.2-3.5,0.1-5.9-4.8-5.9c-4.8,0.1-4.3,2.8-4.3,5.8c0,2.4,0.1,4.9,0,7.3C91,179,90.9,181.3,95.3,181.3z M77.5,181.2
	c3.7,0,5.2-1.1,4.7-4.8c-0.2-1.3,0-2.6,0-3.9c0-1.1,0-2.2,0-3.4c-0.1-3,1-6.2-4.3-6.3c-5.7-0.1-4.6,3.3-4.7,6.5
	c0,2.4,0.2,4.9-0.1,7.3C72.7,180.1,74,181.2,77.5,181.2z M500.8,181.3c4.1,0,4.6-1.9,4.4-5.1c-0.1-1.5,0-3,0-4.5c0-0.6,0-1.1,0-1.7
	c-0.2-3.2,1.5-7.1-4.7-7c-6,0.1-4.1,3.9-4.3,6.8c-0.2,2,0.1,4.1-0.1,6.1C495.7,179.5,496.5,181.3,500.8,181.3z M482.8,163
	c-3.7,0-5.2,1.1-4.7,4.8c0.2,1.3,0,2.6,0,3.9c0,1.1,0,2.2,0,3.4c0.1,3-1,6.2,4.3,6.3c5.7,0.1,4.6-3.3,4.7-6.5c0-2.4-0.2-4.9,0.1-7.3
	C487.5,164.1,486.3,163,482.8,163z M95.7,388.3c4,0,4.8-1.6,4.5-5c-0.1-1.3,0-2.6,0-3.9c0-0.9,0-1.9,0-2.8c-0.1-3.1,1.2-6.6-4.6-6.6
	c-5.9,0-4.3,3.7-4.4,6.7c-0.1,2.2,0.1,4.5-0.1,6.7C90.7,386.9,91.9,388.2,95.7,388.3z M77.7,388.3c4,0,4.8-1.6,4.5-5
	c-0.1-1.3,0-2.6,0-3.9c0-0.9,0-1.9,0-2.8c-0.1-3.1,1.2-6.6-4.5-6.6c-5.8,0-4.3,3.7-4.4,6.7c-0.1,2.2,0.2,4.5-0.1,6.7
	C72.7,386.9,73.9,388.2,77.7,388.3z M482.8,388.3c4.1,0,4.6-1.9,4.4-5.1c-0.1-1.3,0-2.6,0-3.9c0-0.7,0-1.5,0-2.2
	c-0.2-3.2,1.6-7.1-4.6-7.1c-6,0.1-4.1,3.9-4.3,6.8c-0.2,2,0.1,4.1-0.1,6.2C477.8,386.5,478.5,388.3,482.8,388.3z M500.4,370
	c-4.2,0-4.5,2-4.3,5.2c0.1,1.5,0,3,0,4.5c0,0.7,0,1.5,0,2.2c0,3.3-0.9,6.6,4.7,6.4c5.4-0.1,4.2-3.4,4.3-6.3c0.1-2.2-0.2-4.5,0.1-6.7
	C505.5,371.6,504.6,370,500.4,370z M500.7,262c-3.8,0-5,1.4-4.6,4.9c0.2,1.3,0,2.6,0,3.9c0,1.1,0,2.2,0,3.4c0,3.1-0.8,6.2,4.5,6.2
	c5.1,0,4.6-2.8,4.6-6.1c0-2.4-0.2-4.9,0-7.3C505.5,263.6,504.6,262,500.7,262z M482.7,280.3c4,0.1,4.8-1.7,4.4-5
	c-0.1-1.3,0-2.6,0-3.9c0-0.9,0-1.9,0-2.8c-0.1-3.2,1.1-6.6-4.6-6.6c-5.9,0-4.2,3.7-4.4,6.7c-0.1,2.2,0.2,4.5-0.1,6.7
	C477.7,279,479,280.2,482.7,280.3z M77.9,280.2c3.7,0.1,4.5-1.5,4.2-4.7c-0.1-1.5,0-3,0-4.5c0-0.9,0-1.9,0-2.8
	c-0.1-2.9,1.2-6.2-4.2-6.4c-5.6-0.1-4.8,3.1-4.8,6.4c0,2.4,0.2,4.9,0,7.3C72.6,279.6,74.5,280.2,77.9,280.2z M95.5,280.3
	c3.7-0.1,5.1-1.2,4.7-4.8c-0.2-1.3,0-2.6,0-3.9c0-1.1,0-2.2,0-3.4c0-3,1-6.2-4.4-6.2c-5,0-4.8,2.6-4.7,6c0.1,2.4,0.2,4.9,0,7.3
	C90.9,278.4,91.4,280.3,95.5,280.3z"/>
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
                                    <button :style="{background:'rgba('+getterTowerBridgeBg1+')'}" @click="ShowElement(getterTowerBridgeBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTowerBridgeBg2+')'}" @click="ShowElement1(getterTowerBridgeBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterTowerBridgeBg3+')'}" @click="ShowElement2(getterTowerBridgeBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTowerBridgeBg4+')'}" @click="ShowElement3(getterTowerBridgeBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterTowerBridgeBg5+')'}" @click="ShowElement4(getterTowerBridgeBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        var TowerBridge= [
                {top:254 ,left:50},
                {top:9 ,left:185},
                {top:478 ,left:118},
                {top:476 ,left:112},
                {top:330 ,left:143},
                {top:254 ,left:50},
                {top:8 ,left:49},
                {top:28 ,left:15},
                {top:41 ,left:127},
                {top:155 ,left:73},
            ]        
        
        
         if(this.$store.state.randomIndexElement == '4'){
             this.scaleValue = '1.2'
         }

        if(this.$store.state.RandomClicked == true){
            var randomNumber = TowerBridge[this.$store.state.randomIndexElement].left
            var randomNumberTop  =  TowerBridge[this.$store.state.randomIndexElement].top
            if(this.$store.state.randomFirstSvg == 'TowerBridge'){
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
                getterTowerBridgeBg1: {
                    get() {
                        // console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TowerBridge') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                        }

                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTowerBridgeBg2: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TowerBridge') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTowerBridgeBg3: {
                    get() {
                        if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'TowerBridge') {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                        }
                    },
                    set(newValue) {
                        console.log(newValue)
                    }
                },
                getterTowerBridgeBg4: {
                    get() {
                        return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                    },
                    set(newValue) {
                            console.log(newValue)
                    }
                },
                getterTowerBridgeBg5: {
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
                            name:'TowerBridge',
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