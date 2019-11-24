<template>
    <div>
        <div id="menu">
             <div class="left_sidemenu">
                <ul id="sideicon_nav">
                    <li @click="ClickNav == false ? openNav('search') :closeNav($event)" id="search" data-name="search" class="active">
                        <svg  data-name="search" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M28.591 27.273l-7.263-7.264c1.46-1.756 2.339-4.010 2.339-6.471 0-5.595-4.535-10.129-10.129-10.129-5.594 0-10.129 4.535-10.129 10.129 0 5.594 4.536 10.129 10.129 10.129 2.462 0 4.716-0.879 6.471-2.339l7.263 7.264 1.319-1.319zM4.475 13.538c0-4.997 4.065-9.063 9.063-9.063 4.997 0 9.063 4.066 9.063 9.063s-4.066 9.063-9.063 9.063c-4.998 0-9.063-4.066-9.063-9.063z"></path>
                        </svg>
                        <span data-name="search">Search</span>
                    </li>
                    <li @click="ClickNav == false ? openNav('bg') :closeNav($event)" id="bg" data-name="bg" >
                        <svg data-name="bg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="32" viewBox="0 0 28 32">
                            <path d="M22.347 14.827v0l-10.4-10.453-0.213 0.16v-0.267c0-1.76-1.44-3.2-3.2-3.2s-3.2 1.44-3.2 3.2v6.667l-4.427 4.427c-1.227 1.227-1.227 3.2 0 4.427l6.027 6.027c0.587 0.64 1.44 0.907 2.24 0.907s1.6-0.32 2.24-0.907l7.627-7.68h6.56l-3.253-3.307zM6.4 4.267c0-1.173 0.96-2.133 2.133-2.133s2.133 0.96 2.133 2.133v1.333l-4.267 4.267v-5.6zM18.613 17.067l-8 8c-0.373 0.373-0.907 0.587-1.493 0.587-0.533 0-1.067-0.213-1.44-0.587l-6.027-6.027c-0.8-0.8-0.8-2.133 0-2.933l9.013-8.96v6.72h1.067v-7.787l0.16-0.16 11.147 11.147h-4.427z"></path>
                            <path d="M28.213 26.987c-0.32-2.88-3.413-6.72-3.413-6.72s-3.147 3.893-3.413 6.773c0 0.16 0 0.267 0 0.427 0 1.92 1.547 3.467 3.467 3.467s3.467-1.547 3.467-3.467c-0.053-0.16-0.053-0.32-0.107-0.48zM24.8 29.867c-1.333 0-2.4-1.067-2.4-2.4 0-0.107 0-0.16 0-0.267v0 0c0.16-1.6 1.387-3.68 2.347-5.12 0.96 1.387 2.187 3.52 2.4 5.067 0 0.107 0 0.213 0 0.32 0.053 1.333-1.013 2.4-2.347 2.4z" ></path>
                        </svg>
                        <span data-name="bg">Background</span>             
                    </li>
                    <li @click="ClickNav == false ? openNav('download') :closeNav($event)" data-name="download" id="download">
                        <svg data-name="download" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M11.335 13.315l-0.754 0.754 5.419 5.419 5.419-5.419-0.754-0.754-4.132 4.132v-16.877h-1.066v16.877z"></path>
                            <path d="M18.666 5.9v1.066h6.931v18.126h-19.192v-18.126h6.931v-1.066h-7.997v20.259h21.325v-20.259z"></path>
                        </svg>
                        <span data-name="download">Download</span>
                    </li>
                    <li  @click="RandomSvg">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M19.199 28.262h-6.403v-10.398l-10.661-14.126h27.731l-10.667 14.126v10.398zM13.862 27.196h4.271v-9.688l9.592-12.703h-23.449l9.586 12.703v9.688z"></path>
                        </svg>
                        <span>Random</span>
                    </li>
                    <li @click="clearAllSvg">  
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M26.129 5.871h-5.331v-1.066c0-1.178-0.955-2.132-2.133-2.132h-5.331c-1.178 0-2.133 0.955-2.133 2.132v1.066h-5.331v1.066h1.099l1.067 20.259c0 1.178 0.955 2.133 2.133 2.133h11.729c1.178 0 2.133-0.955 2.133-2.133l1.049-20.259h1.051v-1.066zM12.268 4.804c0-0.588 0.479-1.066 1.066-1.066h5.331c0.588 0 1.066 0.478 1.066 1.066v1.066h-7.464v-1.066zM22.966 27.14l-0.002 0.027v0.028c0 0.587-0.478 1.066-1.066 1.066h-11.729c-0.587 0-1.066-0.479-1.066-1.066v-0.028l-0.001-0.028-1.065-20.203h15.975l-1.046 20.204z"></path>
                            <path d="M15.467 9.069h1.066v17.060h-1.066v-17.060z"></path>
                            <path d="M13.358 26.095l-1.091-17.027-1.064 0.068 1.091 17.027z"></path>
                            <path d="M20.805 9.103l-1.064-0.067-1.076 17.060 1.064 0.067z"></path>
                        </svg>
                        <span>Clear</span>
                    </li>
                    <!-- <li>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M26.129 2.139c-2.355 0-4.265 1.91-4.265 4.265 0 0.409 0.061 0.803 0.168 1.178l-12.469 5.226c-0.737-1.277-2.114-2.139-3.693-2.139-2.355 0-4.265 1.91-4.265 4.265s1.91 4.265 4.265 4.265c1.234 0 2.343-0.527 3.122-1.366l8.034 5.774c-0.314 0.594-0.494 1.27-0.494 1.988 0 2.356 1.91 4.266 4.265 4.266s4.265-1.91 4.265-4.266c0-2.355-1.91-4.264-4.265-4.264-1.253 0-2.376 0.544-3.157 1.404l-8.023-5.765c0.33-0.605 0.518-1.299 0.518-2.037 0-0.396-0.058-0.778-0.159-1.143l12.478-5.23c0.741 1.26 2.107 2.108 3.675 2.108 2.355 0 4.265-1.91 4.265-4.266 0-2.355-1.91-4.265-4.265-4.265zM20.798 22.398c1.764 0 3.199 1.435 3.199 3.198s-1.435 3.199-3.199 3.199c-1.764 0-3.199-1.435-3.199-3.199s1.435-3.198 3.199-3.198zM5.871 18.133c-1.764 0-3.199-1.435-3.199-3.199s1.435-3.199 3.199-3.199 3.199 1.435 3.199 3.199c0 1.764-1.435 3.199-3.199 3.199zM26.129 9.603c-1.764 0-3.199-1.435-3.199-3.199s1.435-3.199 3.199-3.199c1.764 0 3.199 1.435 3.199 3.199s-1.435 3.199-3.199 3.199z" ></path>
                        </svg>
                        <span>Share</span>
                    </li> -->
                </ul>
            </div>
        </div>
        <div id="mySidenav" class="sidenav">
            <!-- <a class="closebtn" @click="this.closeNav">&times;</a> -->
            <div v-if="this.showSearchBar" class="search_before">
                <input  id="SearchContent" type="text" placeholder="Search" class="form-control" v-model="SearchElement"/>
                <ul class="nav nav-pills mt-3 nav-justified" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="tab" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Packs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="tab" href="#pills-profile" role="tab" aria-controls="profile" aria-selected="false">Icons</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <ul id="groupSvgs">
                            <li v-for="(items , index) in groupIcons" :key="index" >
                                <a :value="items.name" @click="Changetab(items.name)">
                                    <h2>{{items.text}}</h2>
                                    <img :src="items.img" alt="" title="">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="icon_inner">
                            <input type="hidden" value="0" id="bullDogSvg">
                            <!-- Animal Svg  Start-->
                            <ul v-if="showTabMenu =='Dog'">
                                <li>                                    
                                    <img @click="addSvg('Beagle')" name="Beagle" src="images/Dogs_SVG/Beagle.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('Boxer')" name="Boxer" src="images/Dogs_SVG/Boxer.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('BullDog')" name="BullDog" src="images/Dogs_SVG/bulldog.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('FrenchBullDog')" name="FrenchBullDog" src="images/Dogs_SVG/French-bulldog.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('GermanShepherd')" name="GermanShepherd" src="images/Dogs_SVG/german-shepherd.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('GoldenRetriever')" name="GoldenRetriever" src="images/Dogs_SVG/GoldenRetriever.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('Labrador')" name="Labrador" src="images/Dogs_SVG/Labrador.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('Poodle')" name="Poodle" src="images/Dogs_SVG/poodle.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('Rottweiler')" name="Rottweiler" src="images/Dogs_SVG/rottweiler.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>                                    
                                    <img @click="addSvg('YorkshireTerrier')" name="YorkshireTerrier" src="images/Dogs_SVG/YorkshireTerrier.svg" alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                            </ul>
                            <!-- Animal Svg EnD -->
                            
                            
                            <!-- Food Svg -->
                            <ul v-if="showTabMenu == 'Cooking'">
                                <li>
                                    <img  @click="addSvg('Boillingport')"  name="Boillingport" src="images/cooking_svg/boillingport.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Butcherknife')"  name="Butcherknife" src="images/cooking_svg/butcher_knife.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Cheesegrater')"  name="Cheesegrater" src="images/cooking_svg/CheeseGrater.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('ChefHat')"  name="ChefHat" src="images/cooking_svg/ChefHat.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Cuttingboard')"  name="Cuttingboard" src="images/cooking_svg/cutting_board.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('CuttingKnivesinBlock')"  name="CuttingKnivesinBlock" src="images/cooking_svg/CuttingKnivesinBlock.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('PepperShaker')"  name="PepperShaker" src="images/cooking_svg/PepperShaker.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Salt')"  name="Salt" src="images/cooking_svg/salt.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Shaker')"  name="Shaker" src="images/cooking_svg/shaker.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Skillet')"  name="Skillet" src="images/cooking_svg/Skillet.svg"   alt="" draggable="true" @dragstart="drag($event)">                                    
                                </li>
                            </ul>
                            <!-- Food Svg End -->

                            <!-- Space Svg  -->
                            <ul v-if="showTabMenu == 'schoolPack'"> 
                                
                                <li>
                                    <img @click="addSvg('Atom')"  name="Atom" src="images/School/atom.svg"  data-svg="images/space/atom.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('Calculator')"  name="Calculator" src="images/School/calculator.svg"  data-svg="images/space/calculator.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('Compass')"  name="Compass" src="images/School/compass.svg"  data-svg="images/space/compass.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('Proctor')"  name="Proctor" src="images/School/proctor.svg"  data-svg="images/space/proctor.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('Ruler')"  name="Ruler" src="images/School/ruler.svg"  data-svg="images/space/ruler.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('School')"  name="School" src="images/School/school_house.svg"  data-svg="images/space/school_house.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('SchoolBus')"  name="SchoolBus" src="images/School/schoolbus.svg"  data-svg="images/space/schoolbus.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('Books')"  name="Books" src="images/School/Stack_of_Books.svg"  data-svg="images/space/Stack_of_Books.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('TestTube')"  name="TestTube" src="images/School/Test_tube.svg"  data-svg="images/space/Test_tube.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                                <li>
                                    <img @click="addSvg('WorldGlobe')"  name="WorldGlobe" src="images/School/World_globe.svg"  data-svg="images/space/World_globe.svg" alt="" draggable="true" @dragstart="drag($event)">                           
                                </li>
                            </ul>
                            <!-- SchoolPack Svg  -->

                            <!-- ThanksGiving -->
                            <ul v-if="showTabMenu == 'Music'">
                                <li>
                                    <img @click="addSvg('CompactDisk')" name="CompactDisk" src="images/Music_SVG/CompactDisk.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Drum')" name="Drum" src="images/Music_SVG/Drum.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Earbuds')" name="Earbuds" src="images/Music_SVG/Earbuds.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Headphones')" name="Headphones" src="images/Music_SVG/Headphones.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Megaphone')" name="Megaphone" src="images/Music_SVG/megaphone.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Microphone')" name="Microphone" src="images/Music_SVG/microphone.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('MusicNotes')" name="MusicNotes" src="images/Music_SVG/music_notes.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('RecordAlbum')" name="RecordAlbum" src="images/Music_SVG/RecordAlbum.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Guitar')" name="Guitar" src="images/Music_SVG/Guitar.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img @click="addSvg('Piano')" name="Piano" src="images/Music_SVG/Piano.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                            </ul>
                            <!-- ThanksGiving -->


                            <!-- BathRoom Svg -->
                            <ul v-if="showTabMenu == 'Bathroom'">
                                <li>
                                    <img  @click="addSvg('Bathtub')" name="Bathtub" src="images/bathroom_svg/bathtub.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('FoldedTowels')" name="FoldedTowels" src="images/bathroom_svg/FoldedTowels.svg"  draggable="true" @dragstart="drag($event)" alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Handsoap')" name="Handsoap" src="images/bathroom_svg/Handsoap.svg"  draggable="true" @dragstart="drag($event)" alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Raser')" name="Raser" src="images/bathroom_svg/raser.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('RubberDuck')" name="RubberDuck" src="images/bathroom_svg/RubberDuck.svg"  draggable="true" @dragstart="drag($event)" alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Sink')" name="Sink" src="images/bathroom_svg/sink.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Toilet')" name="Toilet" src="images/bathroom_svg/toilet.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('ToiletPaper')" name="ToiletPaper" src="images/bathroom_svg/ToiletPaper.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Toothbrush')" name="Toothbrush" src="images/bathroom_svg/toothbrush.svg"  draggable="true" @dragstart="drag($event)" alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Towelonholder')" name="Towelonholder" src="images/bathroom_svg/towelonholder.svg" draggable="true" @dragstart="drag($event)"  alt="">                                    
                                </li>
                            </ul>
                            <!-- England Svg -->
                            <ul v-if="showTabMenu == 'England'">
                                <li>
                                    <img  @click="addSvg('BigBen')" name="BigBen" src="images/England_SVG/BigBen.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('BritishPounds')" name="BritishPounds" src="images/England_SVG/BritishPoundsymbol.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('BuckinghamPalace')" name="BuckinghamPalace" src="images/England_SVG/BuckinghamPalace.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Crown')" name="Crown" src="images/England_SVG/Crown.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Doubledeckerbus')" name="Doubledeckerbus" src="images/England_SVG/Doubledeckerbus.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('FlagofEngland')" name="FlagofEngland" src="images/England_SVG/FlagofEngland.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Stonehenge')" name="Stonehenge" src="images/England_SVG/Stonehenge.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('TowerBridge')" name="TowerBridge" src="images/England_SVG/TowerBridge.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('UnionJackflag')" name="UnionJackflag" src="images/England_SVG/UnionJackflag.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                                <li>
                                    <img  @click="addSvg('Redtelephonebox')" name="Redtelephonebox" src="images/England_SVG/Redtelephonebox.svg" draggable="true" @dragstart="drag($event)"   alt="">                                    
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'AlcoholicDrinks'">
                                <li v-for="(items, index) in AlcoholicDrinks" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Birthday'">
                                <li v-for="(items, index) in BirthdaySvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Aviation'">
                                <li v-for="(items, index) in AviationSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Easter'">
                                <li v-for="(items, index) in EasterSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Zodiac'">
                                <li v-for="(items, index) in ZodiacSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'BugsAndInserts'">
                                <li v-for="(items, index) in BugsAndInsertsSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'FourthJuly'">
                                <li v-for="(items, index) in FourthJulySvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Autumn'">
                                <li v-for="(items, index) in Autumn_Svg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'BabyShower'">
                                <li v-for="(items, index) in BabyShowerSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Egypt'">
                                <li v-for="(items, index) in EgyptSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'BabyGirls'">
                                <li v-for="(items, index) in BabyGirlsSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Birds'">
                                <li v-for="(items, index) in BirdsSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Kitchen'">
                                <li v-for="(items, index) in KitchenSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Garden'">
                                <li v-for="(items, index) in GardenSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Fruits'">
                                <li v-for="(items, index) in FruitsSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Fitness'">
                                <li v-for="(items, index) in FitnessSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Graduations'">
                                <li v-for="(items, index) in GraduationsSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'FarmAnimals'">
                                <li v-for="(items, index) in FarmAnimalsSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'Dinosaurs'">
                                <li v-for="(items, index) in DinosaursSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                            <ul v-if="showTabMenu == 'DayOfTheDead'">
                                <li v-for="(items, index) in DayOfTheDeadSvg" :key="index">
                                     <img  @click="addSvg(items.name)" :name="items.name" :src="items.src" draggable="true" @dragstart="drag($event)"  alt=""> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bgcolor_tab search_before" v-if="this.showBgBar" >
                <div class="tab-content">
                    <div class="tab-pane active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                        <ul>
                            <li>
                                <h2>Pick Background Color</h2>
                            </li>
                        </ul>
                        <ul class="colors">
                            <li class="color color-light">
                                <button data-value="fff" @click="getbgcolorValue($event)" style="background-color:#fff;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="f5685d" @click="getbgcolorValue($event)" style="background-color:#f5685d;" class="nostyle active"></button>
                            </li>
                            <li class="color">
                                <button data-value="ec4a81" @click="getbgcolorValue($event)" style="background-color:#ec4a81;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="af51bf" @click="getbgcolorValue($event)" style="background-color:#af51bf;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="8460c4" @click="getbgcolorValue($event)" style="background-color:#8460c4;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="4caaf4" @click="getbgcolorValue($event)" style="background-color:#4caaf4;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="34b9f5" @click="getbgcolorValue($event)" style="background-color:#34b9f5;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="009688" @click="getbgcolorValue($event)" style="background-color:#009688;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="4caf50" @click="getbgcolorValue($event)" style="background-color:#4caf50;" class="nostyle"></button>
                            </li>
                            <li class="color">
                                <button data-value="000000" @click="getbgcolorValue($event)" style="background-color:#000000;" class="nostyle"></button>
                            </li>
                        </ul>
                        <color-picker class="color_picker_model" v-model="colorModel" @input="changePickerColor(colorModel)"></color-picker>
                        <ul class="mt-5">
                            <li>
                                <h2>Hex Code</h2>
                            </li>
                        </ul>
                        <input type="text" value="" class="color_code"  v-model="colorModel" @keyup="getInputColorValue(colorModel, $event)"  name="">
                        <ul class="mt-5">
                            <li>
                                <h2>Color Opacity</h2>
                            </li>
                        </ul>
                        <vue-slider
                            ref="slider"
                            v-model="value"
                            v-bind="options"  @change="getSliderValue(value)">
                        </vue-slider>
                        <h3 class="text-right">{{ value }}%</h3>
                    </div>
                </div>
            </div>
            <div class="bgcolor_tab search_before" v-if="this.showDownloadBar" >
                <div class="tab-content">
                    <div class="tab-pane active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                        <ul>
                            <li>
                                <h2>Format</h2>
                            </li>
                        </ul>
                        <div class="img_preview">
                            <div class="fixed_div">
                                <img src="images/all_use_icon/food_icon.png" alt=""   title="">
                            </div>
                           
                        </div>
                        <ul class="nav nav-pills mt-3 nav-justified download">
                            <li class="nav-item">
                                <label for="download-png">
                                    <input type="radio" name="download" id="download-png" checked="" value="png" v-model="imageFormat" @change="getImageFormat(imageFormat)">
                                    <span class="title btn">png</span>
                                </label>
                            </li>
                            <li class="nav-item">
                                <label for="download-jpg">
                                    <input type="radio" name="download" id="download-jpg" v-model="imageFormat"  value="jpg" @change="getImageFormat()">
                                    <span class="title btn">jpg</span>
                                </label>
                            </li>
                            <li class="nav-item">
                                <label for="download-svg">
                                    <input type="radio" name="download" id="download-svg" value="svg" v-model="imageFormat">
                                    <span class="title btn">svg</span>
                                </label>
                            </li>
                            <li class="nav-item">
                                <label for="download-base64">
                                    <input type="radio" name="download" id="download-base64" v-model="imageFormat" @change="getImageFormat()" value="b64">
                                    <span class="title btn">b64</span>
                                </label>
                            </li>
                        </ul>
                        <!-- <ul class="mt-3">
                            <li>
                                <h2>Tile size (px)</h2>
                            </li>
                        </ul>
                        <input type="number" value="" class="color_code"  v-model="colorModel" name=""> -->
                        <ul class="mt-3 mb-0">
                            <li>
                                <h2>Image size (px)</h2>
                            </li>
                        </ul>
                        <div class="row">
                            <div class="col-sm-5">
                                <input type="number" value="" class="color_code m-0"  v-model="inputImageWidth" data-name="width" @change="getInputImageValue($event,inputImageWidth)" name="">
                            </div>
                            <div class="col-sm-2 p-0">
                                <button class="aspect-ratio keep-ratio" title="Keep aspect ratio" data-aspect-ratio="1.4285714285714286" @click="linkClickDownload">
                                    <img style="width:60% ; height:auto" src="images/all_use_icon/link1.png" v-if="showLinkOne" alt="">
                                    <img style="width:60% ; height:auto" src="images/all_use_icon/link2.png" v-if="showLinktwo" alt="">
                                </button>
                               
                            </div>
                            <div class="col-sm-5">
                                <input type="number" value="" class="color_code m-0"  v-model="inputImageHeight" data-name="height" @change="getInputImageValue($event,inputImageHeight)" name="">
                            </div>
                        </div>
                        
                        <button class="download_btn" @click="downloadImage"> <img src="images/all_use_icon/download.svg" alt="" title="">Download Pattern </button>
                        <progressBar v-if="downloadProgressBar == true"/>
                    </div>
                </div>
                <div class="modal fade" id="b64Modal">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Base 64</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <h3>Code</h3>
                        <div style="word-break: break-all;font-size: 17px;">
                            <p id="b64Content" ref="b64Content"></p>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click="CopyToClipboard" >Copy</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script>
import ColorPicker from "vue-iro-color-picker";
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css'
import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import progressBar from './common/progressBar';
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';

export default {
    mounted(){
        var navClickedElement='search'
       $(function() {
        $("#sideicon_nav li").click(function(e) {
            // console.log(e.target.dataset.name)
            var stored = e.currentTarget.dataset.name
            // remove classes from all
            $("#sideicon_nav li").removeClass("active");
            // add class to the one we clicked
            if(stored != navClickedElement){
                $(this).addClass("active");
                navClickedElement = stored
            }else if(stored == navClickedElement){
                navClickedElement =''
            } 
            });
        });
        this.showSearchBar = true
        // this.ClickNav = true
        document.getElementById("mySidenav").style.width = "318px";
        document.getElementById("mySidenav").style.left = "110px";

        this.enableSearch()
    },
    components: {
    "color-picker": ColorPicker,
    VueSlider,
    progressBar
    
    },
    computed: {
        ...mapState([ 
            'rightBodyBackground',
            'svgName' ,
            'AnimalIconArray', 
            'urlSvg',
            'OpenNavigationElement',
            'RandomClicked',
            'downloadImageWidth',
            'downloadImageHeight',
            'randomFirstSvg',
            'randomIndexElement',
            'b64Image',
            'loaderDisplay',
        ])
    },
    data() {
        return{
            colorModel:"",
            showSearchBar:"",
            showBgBar:"",
            showDownloadBar:"",
            ClickNav:true,
            showTabMenu:'',
            value: 100,
            options: {
                dotSize: 14,
                width: 'auto',
                height: 10,
                contained: false,
                direction: 'ltr',
        	    data: null,
                min: 0,
                max: 100,
                interval: 1,
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
            SearchElement:'',
            groupIcons:[
                {
                   name: 'Dog',
                   img:'images/all_use_icon/animal_icon.jpg',
                   text:'Dogs'
                },
                {
                   name: 'schoolPack',
                   img:'images/all_use_icon/SchoolPack.jpg',
                   text:'School Elements'
                },
                {
                   name: 'Bathroom',
                   img:'images/all_use_icon/bathroom_icon.jpg',
                   text:'Bathroom Set'
                },
                {
                   name: 'AlcoholicDrinks',
                   img:'images/all_use_icon/Alcoholic_icon.jpg',
                   text:'AlcoholicDrinks Set'
                },
                {
                   name: 'Cooking',
                   img:'images/all_use_icon/cooking_icon.jpg',
                   text:'Cooking Set'
                },
                {
                   name: 'Music',
                   img:'images/all_use_icon/music_icon.jpg',
                   text:'Music Set'
                },
                {
                   name: 'England',
                   img:'images/all_use_icon/england_icon.jpg',
                   text:'England Set'
                },
                {
                   name: 'Birthday',
                   img:'images/all_use_icon/birthday_icon.jpg',
                   text:'Birthday Set'
                },
                {
                   name: 'Aviation',
                   img:'images/all_use_icon/aviation_icon.jpg',
                   text:'Aviation Set'
                },
                {
                   name: 'Easter',
                   img:'images/all_use_icon/easter_icon.jpg',
                   text:'Easter Set'
                },
                {
                   name: 'Zodiac',
                   img:'images/all_use_icon/zodiac_sign_icon.jpg',
                   text:'Zodiac Set'
                },
                {
                   name: 'BugsAndInserts',
                   img:'images/all_use_icon/bugs_and_insects_icon.jpg',
                   text:'Bugs And Insects Set'
                },
                {
                   name: 'FourthJuly',
                   img:'images/all_use_icon/4th_july_icon.jpg',
                   text:'4th July (Independence Day in USA)'
                },
                {
                   name: 'Autumn',
                   img:'images/all_use_icon/autumn_icon.jpg',
                   text:'Autumn Set'
                },
                {
                   name: 'BabyShower',
                   img:'images/all_use_icon/baby_shower_icon.jpg',
                   text:'BabyShower Set'
                },
                {
                   name: 'Egypt',
                   img:'images/all_use_icon/egypt_icon.jpg',
                   text:'Egypt Set'
                },
                {
                   name: 'BabyGirls',
                   img:'images/all_use_icon/baby_girls_icon.jpg',
                   text:'BabyGirls Set'
                },
                {
                   name: 'Birds',
                   img:'images/all_use_icon/birds_icon.jpg',
                   text:'Birds Set'
                },
                {
                   name: 'Kitchen',
                   img:'images/all_use_icon/kitchen_icon.jpg',
                   text:'Kitchen Set'
                },
                {
                   name: 'Garden',
                   img:'images/all_use_icon/garden_icon.jpg',
                   text:'Garden Set'
                },
                {
                   name: 'Fruits',
                   img:'images/all_use_icon/fruits_icon.jpg',
                   text:'Fruits Set'
                },
                // {
                //    name: 'Fitness',
                //    img:'images/all_use_icon/fitness_icon.jpg',
                //    text:'Fitness Set'
                // },
                // {
                //    name: 'Graduations',
                //    img:'images/all_use_icon/fitness_icon.jpg',
                //    text:'Graduations Set'
                // },
                // {
                //    name: 'FarmAnimals',
                //    img:'images/all_use_icon/farm_animal_icon.jpg',
                //    text:'Farm Animals Set'
                // },
                {
                   name: 'Dinosaurs',
                   img:'images/all_use_icon/dinosaur_icon.jpg',
                   text:'Dinosaurs Set'
                },
                // {
                //    name: 'DayOfTheDead',
                //    img:'images/all_use_icon/Day_of_the_Dead_icon.jpg',
                //    text:'Day Of The Dead Set'
                // },
            ],
            RandomArray:[
                {
                    name:'Atom', 
                },
                {
                    name:'Compass',
                },
                {
                    name:'Proctor',
                },
                {
                    name:'Ruler',
                },
                {
                    name:'School',
                },
                
            ],
            inputImageWidth:this.$store.state.downloadImageWidth,
            inputImageHeight:this.$store.state.downloadImageHeight,
            imageFormat:'png',
            showLinkOne:true,
            showLinktwo:false,
            downloadProgressBar:false,
            AlcoholicDrinks:[
                {
                   name: 'BeerMug',
                   src:'images/Alcoholic_Drinks_SVG/Beer_Mug.svg',
                },
                {
                   name: 'BeerStein',
                   src:'images/Alcoholic_Drinks_SVG/Beer_Stein.svg',
                },
                {
                   name: 'BottleBeer',
                   src:'images/Alcoholic_Drinks_SVG/Bottle_beer.svg',
                },
                {
                   name: 'CannedBeer',
                   src:'images/Alcoholic_Drinks_SVG/Canned_beer.svg',
                },
                {
                   name: 'Champagne',
                   src:'images/Alcoholic_Drinks_SVG/Champagne.svg',
                },
                {
                   name: 'Margarita',
                   src:'images/Alcoholic_Drinks_SVG/Margarita.svg',
                },
                {
                   name: 'Martini',
                   src:'images/Alcoholic_Drinks_SVG/Martini.svg',
                },
                {
                   name: 'MixedDrink',
                   src:'images/Alcoholic_Drinks_SVG/Mixed_drink.svg',
                },
                {
                   name: 'WineBottle',
                   src:'images/Alcoholic_Drinks_SVG/Wine_Bottle.svg',
                },
                {
                   name: 'WineGlass',
                   src:'images/Alcoholic_Drinks_SVG/Wine_glass.svg',
                },
            ],
            
            BirthdaySvg:[
                {
                   name: 'Balloons',
                   src:'images/Birthday_SVG/balloons.svg',
                },
                {
                   name: 'BirthdayBanner',
                   src:'images/Birthday_SVG/birthday-banner.svg',
                },
                {
                   name: 'BirthdayCard',
                   src:'images/Birthday_SVG/birthday-card.svg',
                },
                {
                   name: 'Cake',
                   src:'images/Birthday_SVG/cake.svg',
                },
                {
                   name: 'Candles',
                   src:'images/Birthday_SVG/candles.svg',
                },
                {
                   name: 'ChampagneBottle',
                   src:'images/Birthday_SVG/Champagne_bottle.svg',
                },
                {
                   name: 'Clown',
                   src:'images/Birthday_SVG/clown.svg',
                },
                {
                   name: 'PartyHat',
                   src:'images/Birthday_SVG/party-hat.svg',
                },
                {
                   name: 'Present',
                   src:'images/Birthday_SVG/Present.svg',
                },
                {
                   name: 'Toy',
                   src:'images/Birthday_SVG/toy.svg',
                },
            ],
            AviationSvg:[
                {
                   name: 'AirBalloon',
                   src:'images/Aviation_SVG/airBalloon.svg',
                },
                {
                   name: 'AirTrafficTower',
                   src:'images/Aviation_SVG/AirTrafficTower.svg',
                },
                {
                   name: 'Blimp',
                   src:'images/Aviation_SVG/Blimp.svg',
                },
                {
                   name: 'Bomber',
                   src:'images/Aviation_SVG/Bomber.svg',
                },
                {
                   name: 'Cloud',
                   src:'images/Aviation_SVG/Cloud.svg',
                },
                {
                   name: 'FlightAttendant',
                   src:'images/Aviation_SVG/FlightAttendant.svg',
                },
                {
                   name: 'Helecoptor',
                   src:'images/Aviation_SVG/Helecoptor.svg',
                },
                {
                   name: 'JetPlane',
                   src:'images/Aviation_SVG/Jet_Plane.svg',
                },
                {
                   name: 'Pilot',
                   src:'images/Aviation_SVG/Pilot.svg',
                },
                {
                   name: 'PropPlane',
                   src:'images/Aviation_SVG/PropPlane.svg',
                },
            ],
            EasterSvg:[
                {
                   name: 'Bible',
                   src:'images/Easter_SVG/bible.svg',
                },
                {
                   name: 'Chick',
                   src:'images/Easter_SVG/Chick.svg',
                },
                {
                   name: 'Church',
                   src:'images/Easter_SVG/church.svg',
                },
                {
                   name: 'Cross',
                   src:'images/Easter_SVG/CROSS.svg',
                },
                {
                   name: 'Daffodils',
                   src:'images/Easter_SVG/Daffodils.svg',
                },
                {
                   name: 'EasterBunny',
                   src:'images/Easter_SVG/easter_bunny.svg',
                },
                {
                   name: 'EasterEgg',
                   src:'images/Easter_SVG/Easter_egg.svg',
                },
                {
                   name: 'EasterEggBasket',
                   src:'images/Easter_SVG/EasterEggBasket.svg',
                },
                {
                   name: 'RisenChrist',
                   src:'images/Easter_SVG/RisenChrist.svg',
                },
                {
                   name: 'Tulips',
                   src:'images/Easter_SVG/tulips.svg',
                },
            ],
            ZodiacSvg:[
                {
                    name: 'Aquarius',
                    src:'images/Zodiac_Signs_svg/Aquarius.svg',
                },
                {
                    name: 'Aries',
                    src:'images/Zodiac_Signs_svg/Aries.svg',
                },
                {
                    name: 'Cancer',
                    src:'images/Zodiac_Signs_svg/Cancer.svg',
                },
                {
                    name: 'Capricorn',
                    src:'images/Zodiac_Signs_svg/Capricorn.svg',
                },
                {
                    name: 'Gemini',
                    src:'images/Zodiac_Signs_svg/Gemini.svg',
                },
                {
                    name: 'Leo',
                    src:'images/Zodiac_Signs_svg/leo.svg',
                },
                {
                    name: 'Libra',
                    src:'images/Zodiac_Signs_svg/Libra.svg',
                },
                {
                    name: 'Pisces',
                    src:'images/Zodiac_Signs_svg/Pisces.svg',
                },
                {
                    name: 'Sagittarius',
                    src:'images/Zodiac_Signs_svg/Sagittarius.svg',
                },
                {
                    name: 'Scorpio',
                    src:'images/Zodiac_Signs_svg/Scorpio.svg',
                },
                {
                    name: 'Taurus',
                    src:'images/Zodiac_Signs_svg/Taurus.svg',
                },
                {
                    name: 'Virgo',
                    src:'images/Zodiac_Signs_svg/Virgo.svg',
                },
            ],
            BugsAndInsertsSvg:[
                {
                    name: 'Ant',
                    src:'images/Bugs_and_Inserts_SVG/Ant.svg',  
                },
                {
                    name: 'Centipede',
                    src:'images/Bugs_and_Inserts_SVG/centipede.svg',  
                },
                {
                    name: 'Cockroach',
                    src:'images/Bugs_and_Inserts_SVG/cockroach.svg',  
                },
                {
                    name: 'Cricket',
                    src:'images/Bugs_and_Inserts_SVG/cricket.svg',  
                },
                {
                    name: 'Fly',
                    src:'images/Bugs_and_Inserts_SVG/Fly.svg',  
                },
                {
                    name: 'Grasshopper',
                    src:'images/Bugs_and_Inserts_SVG/Grasshopper.svg',  
                },
                {
                    name: 'LadyBug',
                    src:'images/Bugs_and_Inserts_SVG/Lady_bug.svg',  
                },
                {
                    name: 'Spider',
                    src:'images/Bugs_and_Inserts_SVG/Spider.svg',  
                },
                {
                    name: 'Tick',
                    src:'images/Bugs_and_Inserts_SVG/Tick.svg',  
                },
                {
                    name: 'Worm',
                    src:'images/Bugs_and_Inserts_SVG/worm.svg',  
                },
            ],
            FourthJulySvg:[
                {
                    name: 'BaldEagle',
                    src:'images/4th-july_SVG/Bald-Eagle.svg',
                },
                {
                    name: 'CookOut',
                    src:'images/4th-july_SVG/Cook-out.svg',
                },
                {
                    name: 'Fireworks',
                    src:'images/4th-july_SVG/fireworks.svg',
                },
                {
                    name: 'Ribbon',
                    src:'images/4th-july_SVG/ribbon.svg',
                },
                {
                    name: 'Stars',
                    src:'images/4th-july_SVG/stars.svg',
                },
                {
                    name: 'StatueOfLiberty',
                    src:'images/4th-july_SVG/Statue_of_Liberty.svg',
                },
                {
                    name: 'Stripes',
                    src:'images/4th-july_SVG/stripes.svg',
                },
                {
                    name: 'UncleSam',
                    src:'images/4th-july_SVG/Uncle-Sam.svg',
                },
                {
                    name: 'UsaFlag',
                    src:'images/4th-july_SVG/usa-flag.svg',
                },
            ],
            Autumn_Svg:[
                {
                    name: 'CornucopiaBasket',
                    src:'images/Autumn_SVG/Cornucopia_basket.svg',  
                },
                {
                    name: 'FallingLeaves',
                    src:'images/Autumn_SVG/falling_leaves.svg',  
                },
                {
                    name: 'Harvest',
                    src:'images/Autumn_SVG/Harvest.svg',  
                },
                {
                    name: 'Hat',
                    src:'images/Autumn_SVG/hat.svg',  
                },
                {
                    name: 'Jacket',
                    src:'images/Autumn_SVG/jacket.svg',  
                },
                {
                    name: 'LeavesFalling',
                    src:'images/Autumn_SVG/Leaves_falling.svg',  
                },
                {
                    name: 'LeavesChangingColor',
                    src:'images/Autumn_SVG/leaves-changing-color.svg',  
                },
                {
                    name: 'Pumpkin',
                    src:'images/Autumn_SVG/Pumpkin.svg',  
                },
                {
                    name: 'PumpkinPie',
                    src:'images/Autumn_SVG/Pumpkin_pie.svg',  
                },
                {
                    name: 'Sweater',
                    src:'images/Autumn_SVG/sweater.svg',  
                },
            ],
            BabyShowerSvg:[
                {
                    name: 'Alphabet',
                    src:'images/Baby_Shower_SVG/alphabet.svg',
                },
                {
                    name: 'BabyFeet',
                    src:'images/Baby_Shower_SVG/Baby_feet.svg',
                },
                {
                    name: 'BalloonsBaby',
                    src:'images/Baby_Shower_SVG/balloon.svg',
                },
                {
                    name: 'BibBaby',
                    src:'images/Baby_Shower_SVG/bib-baby.svg',
                },
                {
                    name: 'CongratulationsBanner',
                    src:'images/Baby_Shower_SVG/Congratulations-banner.svg',
                },
                {
                    name: 'Crib',
                    src:'images/Baby_Shower_SVG/crib.svg',
                },
                {
                    name: 'PresentBaby',
                    src:'images/Baby_Shower_SVG/Present.svg',
                },
                {
                    name: 'Rattle',
                    src:'images/Baby_Shower_SVG/Rattle.svg',
                },
                {
                    name: 'Stork',
                    src:'images/Baby_Shower_SVG/Stork.svg',
                },
                {
                    name: 'TeddyBear',
                    src:'images/Baby_Shower_SVG/Teddy-bear.svg',
                },
            ],
            EgyptSvg:[
                {
                    name: 'Anubis',
                    src:'images/Egypt_SVG/Anubis.svg',
                },
                {
                    name: 'Camel',
                    src:'images/Egypt_SVG/camel.svg',
                },
                {
                    name: 'EgyptianCat',
                    src:'images/Egypt_SVG/EgyptianCat.svg',
                },
                {
                    name: 'Egyptianhieroglyphs',
                    src:'images/Egypt_SVG/Egyptianhieroglyphs.svg',
                },
                {
                    name: 'EyeOfRa',
                    src:'images/Egypt_SVG/eye_of_ra.svg',
                },
                {
                    name: 'Mummy',
                    src:'images/Egypt_SVG/Mummy.svg',
                },
                {
                    name: 'Pyramid',
                    src:'images/Egypt_SVG/Pyramid.svg',
                },
                {
                    name: 'QueenNefertiti',
                    src:'images/Egypt_SVG/QueenNefertiti.svg',
                },
                {
                    name: 'Scarab',
                    src:'images/Egypt_SVG/Scarab.svg',
                },
                {
                    name: 'Sphinx',
                    src:'images/Egypt_SVG/Sphinx.svg',
                },
            ],
            // baby girl
            BabyGirlsSvg:[
                {
                    name: 'BabyBib',
                    src:'images/Baby_Girls_SVG/Baby_Bib.svg',
                },
                {
                    name: 'BabyBottle',
                    src:'images/Baby_Girls_SVG/Baby_Bottle.svg',
                },
                {
                    name: 'BabyDoll',
                    src:'images/Baby_Girls_SVG/Baby_Doll.svg', 
                },
                {
                    name: 'Cradle',
                    src:'images/Baby_Girls_SVG/cradle.svg', 
                },
                {
                    name: 'GirlBanner',
                    src:'images/Baby_Girls_SVG/girl_banner.svg', 
                },
                {
                    name: 'Pacifier',
                    src:'images/Baby_Girls_SVG/Pacifier.svg', 
                },
                {
                    name: 'RubberDucky',
                    src:'images/Baby_Girls_SVG/Rubber_Ducky.svg', 
                },
                {
                    name: 'StorkBaby',
                    src:'images/Baby_Girls_SVG/Stork.svg', 
                },
                {
                    name: 'SwaddledBaby',
                    src:'images/Baby_Girls_SVG/Swaddled_Baby.svg', 
                },
                {
                    name: 'TeddyBearGirl',
                    src:'images/Baby_Girls_SVG/teddy_bear.svg', 
                },
            ],
            // baby girl end
            BirdsSvg:[
                {
                    name: 'Bluebird',
                    src:'images/Birds_SVG/Bluebird.svg',
                },
                {
                    name: 'BlueJay',
                    src:'images/Birds_SVG/BlueJay.svg',
                },
                {
                    name: 'Cardinal',
                    src:'images/Birds_SVG/Cardinal.svg',
                },
                {
                    name: 'Goldfinch',
                    src:'images/Birds_SVG/Goldfinch.svg',
                },
                {
                    name: 'Hawk',
                    src:'images/Birds_SVG/hawk.svg',
                },
                {
                    name: 'Hummingbird1',
                    src:'images/Birds_SVG/Hummingbird1.svg',
                },
                {
                    name: 'Owl',
                    src:'images/Birds_SVG/owl.svg',
                },
                {
                    name: 'Robin',
                    src:'images/Birds_SVG/Robin.svg',
                },
                {
                    name: 'Sparrow',
                    src:'images/Birds_SVG/Sparrow.svg',
                },
                {
                    name: 'Woodpecker',
                    src:'images/Birds_SVG/Woodpecker.svg',
                },
            ],
            KitchenSvg:[
                {
                    name: 'Blender',
                    src:'images/kitchen_svg/blender.svg',
                },
                {
                    name: 'CoffeeMachine',
                    src:'images/kitchen_svg/Coffee_Machine.svg',
                },
                {
                    name: 'Crockpot',
                    src:'images/kitchen_svg/crockpot.svg',
                },
                {
                    name: 'Dishwasher',
                    src:'images/kitchen_svg/Dishwasher.svg',
                },
                {
                    name: 'Microwave',
                    src:'images/kitchen_svg/Microwave.svg',
                },
                {
                    name: 'Mixer',
                    src:'images/kitchen_svg/mixer.svg',
                },
                {
                    name: 'Oven',
                    src:'images/kitchen_svg/oven.svg',
                },
                {
                    name: 'Refrigerator',
                    src:'images/kitchen_svg/Refrigerator.svg',
                },
                {
                    name: 'TeaPot',
                    src:'images/kitchen_svg/tea-pot.svg',
                },
                {
                    name: 'Toster',
                    src:'images/kitchen_svg/toster.svg',
                },
            ],
            GardenSvg:[
                {
                    name: 'Clippers',
                    src:'images/Garden_SVG/Clippers.svg',
                },
                {
                    name: 'GardenHose',
                    src:'images/Garden_SVG/Garden_Hose.svg',
                },
                {
                    name: 'GardeningGloves',
                    src:'images/Garden_SVG/Gardening_Gloves.svg',
                },
                {
                    name: 'LawnMower',
                    src:'images/Garden_SVG/Lawn_Mower.svg',
                },
                {
                    name: 'PatchGrass',
                    src:'images/Garden_SVG/Patch_Grass.svg',
                },
                {
                    name: 'RubberBoots',
                    src:'images/Garden_SVG/Rubber_Boots.svg',
                },
                {
                    name: 'Shovel',
                    src:'images/Garden_SVG/Shovel.svg',
                },
                {
                    name: 'Sunflower',
                    src:'images/Garden_SVG/Sunflower.svg',
                },
                {
                    name: 'Trowel',
                    src:'images/Garden_SVG/Trowel.svg',
                },
                {
                    name: 'Wheelbarrow',
                    src:'images/Garden_SVG/Wheelbarrow.svg',
                },
            ],
            FruitsSvg:[
                {
                    name: 'Apple',
                    src:'images/Fruits_SVG/apple.svg',
                },
                {
                    name: 'Banana',
                    src:'images/Fruits_SVG/Banana.svg',
                },
                {
                    name: 'Grapefruit',
                    src:'images/Fruits_SVG/Grapefruit.svg',
                },
                {
                    name: 'Grapes',
                    src:'images/Fruits_SVG/grapes.svg',
                },
                {
                    name: 'Kiwi',
                    src:'images/Fruits_SVG/kiwi.svg',
                },
                {
                    name: 'Melon',
                    src:'images/Fruits_SVG/melon.svg',
                },
                {
                    name: 'Peach',
                    src:'images/Fruits_SVG/Peach.svg',
                },
                {
                    name: 'Pears',
                    src:'images/Fruits_SVG/Pears.svg',
                },
                {
                    name: 'Pineapple',
                    src:'images/Fruits_SVG/Pineapple.svg',
                },
                {
                    name: 'Strawberry',
                    src:'images/Fruits_SVG/Strawberry.svg',
                },
            ],
            FitnessSvg:[
                {
                    name: 'Apple',
                    src:'images/Fitness_SVG/apple.svg',
                },
                {
                    name: 'Barbells',
                    src:'images/Fitness_SVG/Barbells.svg',
                },
                {
                    name: 'Bicycler',
                    src:'images/Fitness_SVG/Bicycler.svg',
                },
                {
                    name: 'Grapes',
                    src:'images/Fitness_SVG/Grapes.svg',
                },
                {
                    name: 'Muscle',
                    src:'images/Fitness_SVG/Muscle.svg',
                },
                {
                    name: 'Runner',
                    src:'images/Fitness_SVG/Runner.svg',
                },
                {
                    name: 'StationaryBike',
                    src:'images/Fitness_SVG/Stationary_Bike.svg',
                },
                {
                    name: 'Treadmill',
                    src:'images/Fitness_SVG/Treadmill.svg',
                },
                {
                    name: 'Weightlifer',
                    src:'images/Fitness_SVG/Weightlifer.svg',
                },
                {
                    name: 'Yoga',
                    src:'images/Fitness_SVG/Yoga.svg',
                },
            ],
            GraduationsSvg:[
                {
                    name: 'Balloon',
                    src:'images/Graduations_SVG/balloon.svg',
                },
                {
                    name: 'Collage',
                    src:'images/Graduations_SVG/collage.svg',
                },
                {
                    name: 'CongratsBanner',
                    src:'images/Graduations_SVG/Congrats_Banner.svg',
                },
                {
                    name: 'DiplomaFull',
                    src:'images/Graduations_SVG/Diploma (full).svg',
                },
                {
                    name: 'DiplomaScrolled',
                    src:'images/Graduations_SVG/Diploma (scrolled).svg',
                },
                {
                    name: 'Flowers',
                    src:'images/Graduations_SVG/Flowers.svg',
                },
                {
                    name: 'GraduationRobe',
                    src:'images/Graduations_SVG/Graduation_Robe.svg',
                },
                {
                    name: 'GraduationBanner',
                    src:'images/Graduations_SVG/GraduationBanner.svg',
                },
                {
                    name: 'Mortarboard',
                    src:'images/Graduations_SVG/Mortarboard.svg',
                },
                {
                    name: 'ThrowingHats',
                    src:'images/Graduations_SVG/throwing-hats.svg',
                },                
            ],
            FarmAnimalsSvg:[
                {
                    name: 'Bull',
                    src:'images/Farm_Animals_SVG/bull.svg',
                },
                {
                    name: 'Chicken',
                    src:'images/Farm_Animals_SVG/Chicken.svg',
                },
                {
                    name: 'Cow',
                    src:'images/Farm_Animals_SVG/COW.svg',
                },
                {
                    name: 'Donkey',
                    src:'images/Farm_Animals_SVG/Donkey.svg',
                },
                {
                    name: 'Goat',
                    src:'images/Farm_Animals_SVG/goat.svg',
                },
                {
                    name: 'Goose',
                    src:'images/Farm_Animals_SVG/goose.svg',
                },
                {
                    name: 'Horse',
                    src:'images/Farm_Animals_SVG/horse.svg',
                },
                {
                    name: 'Pig',
                    src:'images/Farm_Animals_SVG/pig.svg',
                },
                {
                    name: 'Sheep',
                    src:'images/Farm_Animals_SVG/sheep.svg',
                },
                {
                    name: 'SheepDog',
                    src:'images/Farm_Animals_SVG/Sheep_Dog.svg',
                },                
            ],
            DinosaursSvg:[
                {
                    name: 'Brontosaurus',
                    src:'images/Dinosaurs_SVG/Brontosaurus.svg',
                },
                {
                    name: 'Dimetrodon',
                    src:'images/Dinosaurs_SVG/Dimetrodon.svg',
                },
                {
                    name: 'Parasaurolophus',
                    src:'images/Dinosaurs_SVG/Parasaurolophus.svg',
                },
                {
                    name: 'Plesiosaurus',
                    src:'images/Dinosaurs_SVG/Plesiosaurus.svg',
                },
                {
                    name: 'Pterodactyl',
                    src:'images/Dinosaurs_SVG/Pterodactyl.svg',
                },
                {
                    name: 'Spinosaurus',
                    src:'images/Dinosaurs_SVG/Spinosaurus.svg',
                },
                {
                    name: 'Stegosaurus',
                    src:'images/Dinosaurs_SVG/Stegosaurus.svg',
                },
                {
                    name: 'Triceratops',
                    src:'images/Dinosaurs_SVG/Triceratops.svg',
                },
                {
                    name: 'TyrannosaurusRex',
                    src:'images/Dinosaurs_SVG/Tyrannosaurus_Rex.svg',
                },
                {
                    name: 'Velociraptor',
                    src:'images/Dinosaurs_SVG/Velociraptor.svg',
                },                
            ],
            DayOfTheDeadSvg:[
                {
                    name: 'Cactus',
                    src:'images/Day_of_the_Dead_SVG/Cactus.svg',
                },
                {
                    name: 'Coffin',
                    src:'images/Day_of_the_Dead_SVG/Coffin.svg',
                },
                {
                    name: 'DrinkWater',
                    src:'images/Day_of_the_Dead_SVG/drink_water.svg',
                },
                {
                    name: 'MaxicanSugarSkull',
                    src:'images/Day_of_the_Dead_SVG/Maxican_Sugar_Skull.svg',
                },
                {
                    name: 'MexicanMerigoldFlower',
                    src:'images/Day_of_the_Dead_SVG/Mexican_Merigold_flower.svg',
                },
                {
                    name: 'SaltDayOf',
                    src:'images/Day_of_the_Dead_SVG/Salt.svg',
                },
                {
                    name: 'Skeleton',
                    src:'images/Day_of_the_Dead_SVG/Skeleton.svg',
                },
                {
                    name: 'Sombrero',
                    src:'images/Day_of_the_Dead_SVG/Sombrero.svg',
                },
                {
                    name: 'Tamales',
                    src:'images/Day_of_the_Dead_SVG/Tamales.svg',
                },
                {
                    name: 'Tombstone',
                    src:'images/Day_of_the_Dead_SVG/Tombstone.svg',
                },                
            ],
        }
    },
     methods:{
        ...mapActions([
        'ACTION_CHANGE_STATE',
        'ACTION_PUSH_TO_SVG',
        'ACTION_PUSH_SVG_RANDOM'
        ]),
        ...mapMutations([
            
        ]),
      openNav(value) {
          this.ClickNav = true
         if(value === 'search'){
            this.ACTION_CHANGE_STATE(['OpenNavigationElement', value])
            this.showSearchBar = true
            this.showBgBar = false
            this.enableSearch()

         }else if (value === 'bg'){
             this.ACTION_CHANGE_STATE(['OpenNavigationElement', value])
            this.showBgBar = true
         }else if(value ==='download'){
              
            this.ACTION_CHANGE_STATE(['OpenNavigationElement', value])
            this.showDownloadBar = true
             $('.modal').modal('hide');
             $('svg').removeClass('active')
             domtoimage.toPng(document.getElementById('main'),{ width: 1275 , height:580 })
                .then(function (dataUrl) {
                    var img = new Image();
                    img.src = dataUrl;
                    // document.body.appendChild(img);
                    //  $('.fixed_div').remove('img')
                    $(".fixed_div img:last-child").remove()
                    $('.fixed_div').append(img)
                    // console.log(dataUrl)
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
            });
         } 

         document.getElementById("mySidenav").style.width = "318px";
         document.getElementById("mySidenav").style.left = "110px";
      },
        drag(ev) {
            // console.log(ev.target.name)
                ev.dataTransfer.setData("text", ev.target.name);
        },   
      closeNav (event) {
        //   alert(event.target.dataset.name)
          if(this.$store.state.OpenNavigationElement == event.target.dataset.name){
            $('#'+event.target.dataset.name).removeClass('active')
            this.ClickNav = false
            this.showSearchBar = false
            this.showBgBar = false
            this.showDownloadBar = false
            document.getElementById("mySidenav").style.width = "318px";
            document.getElementById("mySidenav").style.left = "-20%";
          }else{
              if(event.target.dataset.name =='search'){
                
                   this.showBgBar = false
                   this.showDownloadBar = false
                   this.openNav('search')
              }else if(event.target.dataset.name =='bg'){
                 
                 this.showSearchBar = false
                  this.showDownloadBar = false
                  this.openNav('bg')
              }else if(event.target.dataset.name =='download'){
                    this.showSearchBar = false
                    this.showBgBar = false
                    this.openNav('download')
              }
          }
        },
        changePickerColor(value){
            //  console.log(value)
            var hex = value.replace('#','');
            var r = parseInt(hex.substring(0,2), 16);
            var g = parseInt(hex.substring(2,4), 16);
            var b = parseInt(hex.substring(4,6), 16);
            var opacity = '100'
            var result = r+','+g+','+b+','+opacity/100;
            this.ACTION_CHANGE_STATE(['rightBodyBackground', result])
            this.value = 100;
        },
        getbgcolorValue(e){
            var colorCode = '#'+e.target.dataset.value
            this.colorModel =colorCode
            var hex = colorCode.replace('#','');
            var r = parseInt(hex.substring(0,2), 16);
            var g = parseInt(hex.substring(2,4), 16);
            var b = parseInt(hex.substring(4,6), 16);
            // console.log(b)
            var opacity = '100'
            var result = +r+','+g+','+b+','+opacity/100;
            // console.log(result, 'sasasasa')
            this.ACTION_CHANGE_STATE(['rightBodyBackground', result])
            this.value = 100;
        },
        getSliderValue(value){
            var SliderValue  = value/100
            // console.log(SliderValue)
            var colorvalue  = $('.main_div').attr('value')
            var test = colorvalue.split(',')
            // console.log(test[0],test[1],test[2])
            var result = test[0]+','+test[1]+','+test[2]+','+SliderValue
            this.ACTION_CHANGE_STATE(['rightBodyBackground', result])
        },
        addSvg (SvgName) {
            $('.modal').modal('hide');
            $('svg').removeClass('active')
            var x = $('#bullDogSvg').val()
            this.ACTION_PUSH_TO_SVG(SvgName)
            this.ACTION_CHANGE_STATE(['dynamicIndex' ,x])
            x++
            $('#bullDogSvg').val(x)
        },
        Changetab(value){
            $('#pills-home').removeClass('active show')
            $('#pills-home-tab').removeClass('active')
            $('#pills-profile-tab').addClass('active')
            $('#pills-profile').addClass('active show')
            this.showTabMenu = value
        },
        downloadImage(){
             $('.modal').modal('hide');
             $('svg').removeClass('active')
            /* This Will Excecute After Clicked Download Pattern */
            console.log(this.$store.state.SvgComponent.length)
            if(this.$store.state.SvgComponent.length == 0){
                alert('null')
                return false 
            }
            var node = document.getElementById('main');
            // console.log(this.imageFormat)
            var dynamicWidth = this.$store.state.downloadImageWidth
            var dynamicHeight = this.$store.state.downloadImageHeight
            console.log(dynamicWidth ,dynamicHeight )
              var self = this
            if(dynamicWidth == 0 && dynamicHeight == 0){
                alert('Error in Either Width Or Height of Image size')
                return false
            }
            if(this.imageFormat == 'png'){
                this.downloadProgressBar = true;
              
                setTimeout(function(){
                    domtoimage.toCanvas(document.getElementById('main'),{ width: dynamicWidth , height:dynamicHeight})
                    .then(function (canvas) {
                        // console.log(canvas)
                        if(self.$store.state.progressValue == 100){
                            self.downloadProgressBar = false
                            canvas.toBlob(function(blob) {
                                saveAs(blob, "PatternImage.png");
                            })
                        } 
                        // console.log('canvas', canvas.width, canvas.height); 
                    });                
                },2000)
            }else if(this.imageFormat == 'jpg'){
                this.downloadProgressBar = true;
                setTimeout(function(){
                     /*For Jpeg */
                     domtoimage.toJpeg(document.getElementById('main'), { width: dynamicWidth , height:dynamicHeight })
                     .then(function (dataUrl) {
                        if(self.$store.state.progressValue == 100){
                            var link = document.createElement('a');
                            link.download = 'PatternImage.jpeg';
                            link.href = dataUrl;
                            link.click();
                            self.downloadProgressBar = false
                        }
                    });
                },2000)  
            }else if(this.imageFormat == 'svg'){
                this.downloadProgressBar = true;
                function filter (node) {
                    return (node.tagName !== 'i');
                }
                 setTimeout(function(){
                    domtoimage.toSvg(document.getElementById('main'), { width: dynamicWidth , height:dynamicHeight})
                    .then(function (dataUrl) {
                        /* do something */
                        console.log(self.$store.state.progressValue)
                        if(self.$store.state.progressValue == 100){
                            saveAs(dataUrl, "PatternImage.svg");
                            self.downloadProgressBar = false
                        }
                    })
                 },2500)
            }else {
                    $(document).ready(function(){
                        $('#b64Modal').modal('show');
                    })
                domtoimage.toPng(document.getElementById('main'), { width: dynamicWidth , height:dynamicHeight })
                .then(function (dataUrl) {
                    $('#b64Modal').find('p').html(dataUrl)
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
            }

             return false

        },
        clearAllSvg(){
            this.ACTION_CHANGE_STATE(['OpenNavigationElement', 'clear'])
            document.getElementById("mySidenav").style.width = "318px";
            document.getElementById("mySidenav").style.left = "-20%";
            document.getElementById("main").innerHTML = "";
            this.$store.state.rightBodyBackground = '255, 255, 255,1'
        },
        getInputColorValue(val ,e){
            if(e.code == 'Enter'){
            var hex = val.replace('#','');
            var r = parseInt(hex.substring(0,2), 16);
            var g = parseInt(hex.substring(2,4), 16);
            var b = parseInt(hex.substring(4,6), 16);
            var opacity = '100'
            var result = r+','+g+','+b+','+opacity/100;
            this.ACTION_CHANGE_STATE(['rightBodyBackground', result])
            this.value = 100;
            }
        },
        RandomSvg(){
            this.ACTION_CHANGE_STATE(['OpenNavigationElement', 'random'])
            document.getElementById("mySidenav").style.width = "318px";
            document.getElementById("mySidenav").style.left = "-20%";
            this.clearAllSvg()
            var items = this.RandomArray
            // this.ACTION_CHANGE_STATE(['RandomClicked' , true])
            this.ACTION_CHANGE_STATE(['loaderDisplay' , true])
            var self = this
            setTimeout(function(){
                self.ACTION_CHANGE_STATE(['loaderDisplay' , false])
                // console.log(self.$store.state.loaderDisplay)
                self.triggerRandom()
            },1600)
            // this.shuffle(items)
            // return false
            // console.log(this.loaderDisplay, 'ssss')
                
        },
        triggerRandom(){
             var items = this.RandomArray
              this.ACTION_CHANGE_STATE(['RandomClicked' , true])
            if(this.showTabMenu =='' ||this.showTabMenu =='schoolPack' ){
                // console.log('working two')
                /* 
                This is for Random Color for background
                */
                var letters = '0123456789ABCDEF';
                var colorRandom = '#';
                for (var i = 0; i < 6; i++) {
                    colorRandom += letters[Math.floor(Math.random() * 16)];
                }
                /* 
                End
                */

                this.colorModel =colorRandom
                var hex = colorRandom.replace('#','');
                var r = parseInt(hex.substring(0,2), 16);
                var g = parseInt(hex.substring(2,4), 16);
                var b = parseInt(hex.substring(4,6), 16);
                var opacity = '100'
                var result = +r+','+g+','+b+','+opacity/100;
                this.ACTION_CHANGE_STATE(['rightBodyBackground', result])
                this.value = 100;
                var RandomItems= items.sort(() => Math.random() - 0.5);
                // console.log(RandomItems[0] , 'nav')
                var indexRandom = Math.floor(Math.random() * 10);
                this.ACTION_CHANGE_STATE(['randomIndexElement', indexRandom])
                this.ACTION_CHANGE_STATE(['randomFirstSvg' , RandomItems[0].name])
                // return false;
                RandomItems.map((d, index)=>{
                    // alert(d.name)
                    this.ACTION_PUSH_TO_SVG(d.name)
                    var x = $('#bullDogSvg').val()
                    this.ACTION_CHANGE_STATE(['dynamicIndex' ,x])
                    x++
                    $('#bullDogSvg').val(x)
                    if(index ==4){
                        this.CompleteRandom()
                    }
                })
            }   
        },
        CompleteRandom(){
            var self = this
            setTimeout(function(){
                self.ACTION_CHANGE_STATE(['RandomClicked' , false])
            },1000)
            //rgb(255, 217, 168, 1)
        },
        getInputImageValue(e, value){
            if(e.target.dataset.name == "width"){
                this.ACTION_CHANGE_STATE(['downloadImageWidth' , value])
                if(this.showLinkOne == true){
                    var height = this.getHeight(value);
                    this.inputImageHeight = height 
                        this.ACTION_CHANGE_STATE(['downloadImageHeight' , height])
                }
                // console.log(height);
            }else{
                this.ACTION_CHANGE_STATE(['downloadImageHeight' , value])
                if(this.showLinkOne == true){
                    var width = this.getWidth(value);
                    this.inputImageWidth = width 
                        this.ACTION_CHANGE_STATE(['downloadImageWidth' , width])
                }
            }
        },
        getImageFormat(){

        },
        enableSearch(){
            $(document).ready(function(){
            $("#SearchContent").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                    $("#groupSvgs li").filter(function () {
                    // console.log($(this).toggle($(this).text().toLowerCase().indexOf(value)))
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
            })
        },
        CopyToClipboard() {
            this.selectText(this.$refs.b64Content);
            document.execCommand("copy");
        },
        selectText(element) {
            var range;
            if (document.selection) {
                // IE
                range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                range = document.createRange();
                range.selectNode(element);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
        },
        getHeight(length) {
            var ratio = 2;
            var height =length/ratio;;
            return Math.round(height);
        },
        getWidth(length) {
            // console.log(length, 'ssasas')
            var ratio = 2;
            var width = length*ratio;
            return Math.round(width);
        },
        linkClickDownload(){
            if(this.showLinkOne == true){
                this.showLinkOne = false
                this.showLinktwo = true 
            }else{
                    this.showLinktwo = false 
                    this.showLinkOne = true
            }
        }   
    }
}
</script>

<style>

</style>


