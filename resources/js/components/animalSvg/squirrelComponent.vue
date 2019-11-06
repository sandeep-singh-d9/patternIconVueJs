<template>
    <div style="height:0px">
        <svg  @click="getCircle(dynamicIndexValue, $event)" v-for="(items , index) in dataloop" :key="index" version="1.1" baseProfile="basic"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue"  :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
                <g>
                    <g>
                        <path :style="{fill:'rgba(101, 81, 60 , 1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color3'" d="M185.474,93.505v135.128c0,25.607,20.76,46.367,46.368,46.367v37.1h-74.766
			c-37.014,0-67.02-30.007-67.02-67.02v-23.175c0-18.609-11.606-34.509-27.975-40.854l-0.001,0.003
			C25.928,168.396,0,133.978,0,93.505C0,42.288,41.52,0.768,92.737,0.768S185.474,42.288,185.474,93.505z" />
                        <path style="fill:#E1CB81;transform:scale(0.2)" :class="ValueId+'_color4'" d="M92.737,0.768c8.29,0,16.323,1.094,23.97,3.135c32.169,15.985,53.879,49.171,53.879,86.959v137.096
			c0,24.285,19.758,44.042,44.043,44.042h0.796c5.104,1.933,10.634,3,16.416,3v3H214.63c-27.594,0-50.043-22.449-50.043-50.042
			V90.862c0-44.998-32.796-83.057-76.845-89.959C89.396,0.815,91.061,0.768,92.737,0.768z" />
                    </g>
                    <path :style="{fill:'rgba(156, 127, 77, 1)',transform: 'scale(0.2)' }" :class="ValueId+'_color2'" d="M200.74,208.506V66.555c0-11.966,9.697-21.657,21.66-21.66c11.96,0,21.657,9.694,21.657,21.658
		v7.991c10.243-5.017,21.754-7.842,33.929-7.842h14.174c42.662,0,77.246,34.584,77.246,77.246c0,28.158-15.072,52.79-37.584,66.289
		c17.323,17.129,28.06,40.906,28.06,67.193c0,52.191-42.309,94.5-94.5,94.5s-94.5-42.309-94.5-94.5
		C170.881,250.245,182.364,225.746,200.74,208.506z" />
                    <circle style="fill:#333E48;transform:scale(0.2)" cx="315.436"  :class="ValueId+'_color5'" cy="124.156" r="8.291" />
                    <g>
                        <path style="fill:#333E48;transform:scale(0.2)" :class="ValueId+'_color5'"  d="M369.817,132.986c0-1.646-1.334-2.98-2.98-2.98l-5.19,0.064c-5.468,0.022-6.711,3.137-2.762,6.917
			l4.405,4.219c1.828,1.752,4.166,2.66,6.525,2.741L369.817,132.986L369.817,132.986z" />
                    </g>
                    <path :style="{fill:'rgba(130, 105, 64,1)' ,transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M235.452,246.528c35.661,0,64.57,28.909,64.57,64.569v28.419h23.95
		c9.985,0,18.079,8.094,18.079,18.076c0,9.984-8.093,18.078-18.079,18.078H267.87c-0.006,0-0.013-0.001-0.02-0.001h-32.398
		c-35.662,0-64.571-28.909-64.571-64.572C170.881,275.437,199.79,246.528,235.452,246.528z" />
                    <path :style="{fill:'rgba(130, 105, 64,1)',transform: 'scale(0.2)' }" :class="ValueId+'_color1'" d="M371.142,268.699c7.061,7.061,7.06,18.507,0.001,25.565c-7.06,7.06-18.506,7.061-25.566,0
		l-32.618-32.618c-7.06-7.061-7.059-18.505,0.001-25.565c7.059-7.059,18.503-7.061,25.563,0L371.142,268.699z" />
                </g>
        </svg>

        <!-- <svg @click="getCircle(dynamicIndexValue, $event)" xmlns:xlink="http://www.w3.org/1999/xlink" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue">
            <use  @click="getCircle(dynamicIndexValue, $event)" :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3"  />
        </svg>

        <svg xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use  @click="getCircle(dynamicIndexValue, $event)" :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use  @click="getCircle(dynamicIndexValue, $event)" :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg>
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" @click="getCircle(dynamicIndexValue, $event)" data-toggle="modal" :data-target="'#myModal'+dynamicIndexValue" :style="{transform:'rotate('+sliderValue+'deg) scale('+scaleValue+') scaleX('+flipElement+')'}">
            <use  @click="getCircle(dynamicIndexValue, $event)" :class="this.ValueId" :href="'#ic'+this.ValueId" x="7.9" y="3" />
        </svg> -->

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
                                <a class="nav-link" data-tooltip="Clone"   @click="openElementInModal('duplicate')"><img src="images/all_use_icon/duplicate.svg"></a>
                            </li>
                            <li class="nav-item" @click="disableDraggable(dynamicIndexValue)">
                                <a class="nav-link" data-tooltip="Layer"   @click="openElementInModal('layers')" ><img src="images/all_use_icon/layers.svg"></a>
                            </li>
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
                                    <button :style="{background:'rgba('+getterSquirrelBg1+')'}" @click="ShowElement(getterSquirrelBg1)" :class="this.ValueId+'_color1btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSquirrelBg2+')'}" @click="ShowElement1(getterSquirrelBg2)" :class="this.ValueId+'_color2btn'"></button>
                                    <button :style="{backgroundColor:'rgba('+getterSquirrelBg3+')'}" @click="ShowElement2(getterSquirrelBg3)" :class="this.ValueId+'_color3btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSquirrelBg4+')'}" @click="ShowElement3(getterSquirrelBg4)" :class="this.ValueId+'_color4btn'"></button>

                                    <button :style="{backgroundColor:'rgba('+getterSquirrelBg5+')'}" @click="ShowElement4(getterSquirrelBg5)" :class="this.ValueId+'_color5btn'"></button>
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
        <!-- <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
    <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
    <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
     <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
    <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>
    <svg viewBox="0 0 2000 1000" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use :class="this.ValueId" :href="'#ic'+this.ValueId" x="0" y="0" />
    </svg>

    <div :id="svgName+dynamicIndex" v-if="this.$store.state.dynamicName ===svgName+dynamicIndex">
        <button :style="{background:'rgba(130, 105, 64,1)' , width:'50px' ,height:'50px'}" @click="ShowElement(getterSquirrelBg1)" :class="this.ValueId+'_color1btn'"></button>

        <button :style="{backgroundColor:'rgba(156, 127, 77, 1)' , width:'50px' , height:'50px'}" @click="ShowElement1(getterSquirrelBg2)" :class="this.ValueId+'_color2btn'"></button>

        <button :style="{backgroundColor:'rgba(101, 81, 60 , 1)' , width:'50px' , height:'50px'}" @click="ShowElement2(getterSquirrelBg3)" :class="this.ValueId+'_color3btn'"></button>
    </div>
    <Colorpicker v-if="this.showColorPicker" :colorElement ="this.colorValue" :valueElement="this.clickedInput"/>
     <button v-if="this.showColorPicker" @click="hideElement">Close</button> -->
    </div>
</template>

<script>
    import ColorButton from '../ColorButton'
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
            ColorButton,
            Colorpicker,
            VueSlider,
        },
        mounted() {
            var width = window.innerWidth;
            var height = window.innerWidth

            var items = [254, 249, 212, 365, 254 , 150, 276 ,81 , 100 , 150 , 200];
            var itemsTop = [488, 350, 255, 145,  , 150, 333 ,300 , 222 , 111 , 154];
        
        

        if(this.$store.state.RandomClicked == true){
        var randomNumber = items[Math.floor(Math.random()*items.length)];
        var randomNumberTop = itemsTop[Math.floor(Math.random()*itemsTop.length)];
            var randomWidth = randomNumber
            var randomHeight = randomNumberTop
        }else{    
            var randomWidth = Math.floor(Math.random()*350);
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
                console.log(event)
                self.returnDrag = true
            });
             $( "#"+DynamicIDs).on( "dragstop", function( event, ui ) {
                setTimeout(function(){
                     self.returnDrag = false
                },1500)
            }); 

        },
        computed: {
            ...mapState([
                    'background',
                    'background1',
                    'background2',
                    'dynamicIndex',
                    'dynamicName',
                    'newDisableIndex'
                ]),
                getterSquirrelBg1: {
                    get() {
                            console.log(this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0])
                            if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Squirrel') {
                                return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                            }

                        },
                        set(newValue) {
                            console.log(newValue)
                        }
                },
                getterSquirrelBg2: {
                    get() {
                            if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Squirrel') {
                                return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1
                            }
                        },
                        set(newValue) {
                            console.log(newValue)
                        }
                },
                getterSquirrelBg3: {
                    get() {
                            if (this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].name === 'Squirrel') {
                                return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2
                            }
                        },
                        set(newValue) {
                            console.log(newValue)
                        }
                },
                getterSquirrelBg4: {
                    get() {
                            return this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background3
                        },
                        set(newValue) {
                            console.log(newValue)
                        }
                },
                getterSquirrelBg5: {
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
                console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            },
            returnDrag: function(newVal, oldVal) { // watch it
                console.log('Prop changed: ', newVal, ' | was: ', oldVal)
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
                    console.log(value, 'ssss')
                    var ColorValue = this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background
                    this.colorValue = 'rgba(' + ColorValue + ')'
                    this.showColorPicker = true
                    this.clickedInput = 'One'
                        //  console.log( , 'value')
                },
                ShowElement1(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background1 + ')'
                    console.log('sjahsja')
                    this.clickedInput = 'Two'
                    this.showColorPicker = true
                },
                ShowElement2(value) {
                    this.colorValue = 'rgba(' + this.$store.state.SvgComponent[this.$store.state.dynamicIndex][0].background2 + ')'
                    console.log('sjahsja')
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
                    console.log(e.currentTarget)
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
                }
        }
    }
</script>

<style>

</style>