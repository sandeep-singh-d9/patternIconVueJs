<template>
  <div :style="{background:'rgba('+this.$store.state.rightBodyBackground+')'}" id="main" @drop="drop($event)" @dragover="allowDrop($event)">
    <div v-for="(Svgs , index) in dataSvgComponent" :key="index" class="right_icondiv" :id="index" :style="{'height':'0px', 'top':'12px','left':'72px'}">
       <div v-for="(itemsName , key) in Svgs" :key="key">
        <component :dynamicIndexValue="index" :ValueId="'Svg_'+index" :svgName="itemsName.name" :is="itemsName.name" :dynamicBackground="itemsName.background"  :dynamicBackgroundOne="itemsName.background1" :dynamicBackgroundTwo="itemsName.background2" :NavClicked="true"></component>
       </div>
    </div>
  </div>
</template>

<script>
import HoverEdit from './common/hoverEdit' 
import BullDogSvg from './animalSvg/bulldog'
import Hippo from './animalSvg/hippopotamusComponent'
import Llama from './animalSvg/llamaComponent' 
import Mouse from './animalSvg/mouseComponent'
import Squirrel from './animalSvg/squirrelComponent' 
import Atom from './SchoolPackSvg/atom' 
import Calculator from './SchoolPackSvg/calculator' 
import Compass from './SchoolPackSvg/compass' 
import Proctor from './SchoolPackSvg/proctor' 
import Ruler from './SchoolPackSvg/ruler' 
import School from './SchoolPackSvg/school' 
import SchoolBus from './SchoolPackSvg/schoolbus' 
import Books from './SchoolPackSvg/books' 
import TestTube from './SchoolPackSvg/testTube' 
import WorldGlobe from './SchoolPackSvg/worldGlobe' 
import Beagle from './DogsSvgComponent/Beagle' 
import Boxer from './DogsSvgComponent/Boxer' 
import BullDog from './DogsSvgComponent/BullDog' 
import FrenchBullDog from './DogsSvgComponent/FrenchBullDog' 
import GermanShepherd from './DogsSvgComponent/GermanShepherd' 
import GoldenRetriever from './DogsSvgComponent/GoldenRetriever' 
import Labrador from './DogsSvgComponent/Labrador' 
import Poodle from './DogsSvgComponent/Poodle' 
import Rottweiler from './DogsSvgComponent/Rottweiler' 
import YorkshireTerrier from './DogsSvgComponent/YorkshireTerrier' 
import Bathtub from './BathroomSvgComponent/Bathtub' 
import FoldedTowels from './BathroomSvgComponent/FoldedTowels' 
import Handsoap from './BathroomSvgComponent/Handsoap' 
import Raser from './BathroomSvgComponent/Raser' 
import RubberDuck from './BathroomSvgComponent/RubberDuck' 
import Sink from './BathroomSvgComponent/Sink' 
import Toilet from './BathroomSvgComponent/Toilet' 
import ToiletPaper from './BathroomSvgComponent/ToiletPaper' 
import Toothbrush from './BathroomSvgComponent/Toothbrush' 
import Towelonholder from './BathroomSvgComponent/Towelonholder' 
import Boillingport from './CookingComponent/Boillingport' 
import Butcherknife from './CookingComponent/Butcherknife' 
import Cheesegrater from './CookingComponent/Cheesegrater' 
import ChefHat from './CookingComponent/ChefHat' 
import Cuttingboard from './CookingComponent/Cuttingboard' 
import CuttingKnivesinBlock from './CookingComponent/CuttingKnivesinBlock' 
import PepperShaker from './CookingComponent/PepperShaker' 
import Salt from './CookingComponent/Salt' 
import Shaker from './CookingComponent/Shaker' 
import Skillet from './CookingComponent/Skillet' 
import CompactDisk from './MusicComponent/CompactDisk' 
import Drum from './MusicComponent/Drum' 
import Earbuds from './MusicComponent/Earbuds' 
import Headphones from './MusicComponent/Headphones' 
import Megaphone from './MusicComponent/Megaphone' 
import Microphone from './MusicComponent/Microphone' 
import MusicNotes from './MusicComponent/MusicNotes' 
import RecordAlbum from './MusicComponent/RecordAlbum' 
import Guitar from './MusicComponent/Guitar' 
import Piano from './MusicComponent/Piano' 
import BigBen from './EnglandSvgComponent/BigBen' 
import BritishPounds from './EnglandSvgComponent/BritishPounds' 
import BuckinghamPalace from './EnglandSvgComponent/BuckinghamPalace' 
import Crown from './EnglandSvgComponent/Crown' 
import Doubledeckerbus from './EnglandSvgComponent/Doubledeckerbus' 
import FlagofEngland from './EnglandSvgComponent/FlagofEngland' 
import Stonehenge from './EnglandSvgComponent/Stonehenge' 
import TowerBridge from './EnglandSvgComponent/TowerBridge' 
import UnionJackflag from './EnglandSvgComponent/UnionJackflag' 
import Redtelephonebox from './EnglandSvgComponent/Redtelephonebox' 
import BeerMug from './AlcoholicDrinksSvgComponent/BeerMug' 
import CannedBeer from './AlcoholicDrinksSvgComponent/CannedBeer' 
import Champagne from './AlcoholicDrinksSvgComponent/Champagne' 
import Margarita from './AlcoholicDrinksSvgComponent/Margarita' 
import Martini from './AlcoholicDrinksSvgComponent/Martini' 
import MixedDrink from './AlcoholicDrinksSvgComponent/MixedDrink' 
import WineBottle from './AlcoholicDrinksSvgComponent/WineBottle' 
import WineGlass from './AlcoholicDrinksSvgComponent/WineGlass' 
import BeerStein from './AlcoholicDrinksSvgComponent/BeerStein' 
import BottleBeer from './AlcoholicDrinksSvgComponent/BottleBeer' 
import Balloons from './BirthdayComponent/Balloons' 
import BirthdayBanner  from './BirthdayComponent/BirthdayBanner'
import BirthdayCard  from './BirthdayComponent/BirthdayCard'
import Cake  from './BirthdayComponent/Cake'
import Candles  from './BirthdayComponent/Candles'
import ChampagneBottle  from './BirthdayComponent/ChampagneBottle'
import Clown  from './BirthdayComponent/Clown'
import PartyHat  from './BirthdayComponent/PartyHat'
import Present  from './BirthdayComponent/Present'
import Toy  from './BirthdayComponent/Toy'
import AirBalloon  from './AviationComponent/AirBalloon'
import AirTrafficTower  from './AviationComponent/AirTrafficTower'
import Blimp  from './AviationComponent/Blimp'
import Bomber  from './AviationComponent/Bomber'
import Cloud  from './AviationComponent/Cloud'
import FlightAttendant  from './AviationComponent/FlightAttendant'
import Helecoptor  from './AviationComponent/Helecoptor'
import JetPlane  from './AviationComponent/JetPlane'
import Pilot  from './AviationComponent/Pilot'
import PropPlane  from './AviationComponent/PropPlane'
import Bible  from './EasterComponent/Bible'
import Chick  from './EasterComponent/Chick'
import Church  from './EasterComponent/Church'
import Cross  from './EasterComponent/Cross'
import Daffodils  from './EasterComponent/Daffodils'
import EasterBunny  from './EasterComponent/EasterBunny'
import EasterEgg  from './EasterComponent/EasterEgg'
import EasterEggBasket  from './EasterComponent/EasterEggBasket'
import RisenChrist  from './EasterComponent/RisenChrist'
import Tulips  from './EasterComponent/Tulips'
import Aquarius  from './ZodiacSignsComponent/Aquarius'
import Aries  from './ZodiacSignsComponent/Aries'
import Cancer  from './ZodiacSignsComponent/Cancer'
import Capricorn  from './ZodiacSignsComponent/Capricorn'
import Gemini  from './ZodiacSignsComponent/Gemini'
import Leo  from './ZodiacSignsComponent/Leo'
import Libra  from './ZodiacSignsComponent/Libra'
import Pisces  from './ZodiacSignsComponent/Pisces'
import Sagittarius  from './ZodiacSignsComponent/Sagittarius'
import Scorpio  from './ZodiacSignsComponent/Scorpio'
import Taurus  from './ZodiacSignsComponent/Taurus'
import Virgo  from './ZodiacSignsComponent/Virgo'
import Ant  from './BugsAndInsertsComponent/Ant'
import Centipede  from './BugsAndInsertsComponent/Centipede'
import Cockroach  from './BugsAndInsertsComponent/Cockroach'
import Cricket  from './BugsAndInsertsComponent/Cricket'
import Fly  from './BugsAndInsertsComponent/Fly'
import Grasshopper  from './BugsAndInsertsComponent/Grasshopper'
import LadyBug  from './BugsAndInsertsComponent/LadyBug'
import Spider  from './BugsAndInsertsComponent/Spider'
import Tick  from './BugsAndInsertsComponent/Tick'
import Worm  from './BugsAndInsertsComponent/Worm'
import BaldEagle  from './4thjulyComponent/BaldEagle'
import CookOut  from './4thjulyComponent/CookOut'
import Fireworks  from './4thjulyComponent/Fireworks'
import Ribbon  from './4thjulyComponent/Ribbon'
import Stars  from './4thjulyComponent/Stars'
import StatueOfLiberty  from './4thjulyComponent/StatueOfLiberty'
import Stripes  from './4thjulyComponent/Stripes'
import UncleSam  from './4thjulyComponent/UncleSam'
import UsaFlag  from './4thjulyComponent/UsaFlag'
import CornucopiaBasket  from './AutumComponent/CornucopiaBasket'
import FallingLeaves  from './AutumComponent/FallingLeaves'
import Harvest  from './AutumComponent/Harvest'
import Hat from './AutumComponent/Hat'
import Jacket from './AutumComponent/Jacket'
import LeavesFalling from './AutumComponent/LeavesFalling'
import LeavesChangingColor from './AutumComponent/LeavesChangingColor'
import Pumpkin from './AutumComponent/Pumpkin'
import PumpkinPie from './AutumComponent/PumpkinPie'
import Sweater from './AutumComponent/Sweater'

import  Alphabet from './BabyShowerComponent/Alphabet'
import  BabyFeet from './BabyShowerComponent/BabyFeet'
import  BalloonsBaby from './BabyShowerComponent/BalloonsBaby'
import  BibBaby from './BabyShowerComponent/BibBaby'
import  CongratulationsBanner from './BabyShowerComponent/CongratulationsBanner'
import  Crib from './BabyShowerComponent/Crib'
import  PresentBaby from './BabyShowerComponent/PresentBaby'

import  Anubis     from './EgyptComponent/Anubis'
import  Camel     from './EgyptComponent/Camel'
import  EgyptianCat     from './EgyptComponent/EgyptianCat'
import  Egyptianhieroglyphs     from './EgyptComponent/Egyptianhieroglyphs'
import  EyeOfRa     from './EgyptComponent/EyeOfRa'
import  Mummy     from './EgyptComponent/Mummy'
import  Pyramid     from './EgyptComponent/Pyramid'
import  QueenNefertiti     from './EgyptComponent/QueenNefertiti'
import  Scarab     from './EgyptComponent/Scarab'
import  Sphinx     from './EgyptComponent/Sphinx'
import  Rattle from './BabyShowerComponent/Rattle'
import  Stork from './BabyShowerComponent/Stork'
import  TeddyBear from './BabyShowerComponent/TeddyBear'


// baby girl
import  BabyBib from './BabyGirlsComponent/BabyBib'
import  BabyBottle from './BabyGirlsComponent/BabyBottle'
import  BabyDoll from './BabyGirlsComponent/BabyDoll'
import  Cradle from './BabyGirlsComponent/Cradle'
import  GirlBanner from './BabyGirlsComponent/GirlBanner'
import  Pacifier from './BabyGirlsComponent/Pacifier'
import  RubberDucky from './BabyGirlsComponent/RubberDucky'
import  StorkBaby from './BabyGirlsComponent/StorkBaby'
import  SwaddledBaby from './BabyGirlsComponent/SwaddledBaby'
import  TeddyBearGirl from './BabyGirlsComponent/TeddyBearGirl'

// bird 
import  Bluebird from './BirdsSvgComponent/Bluebird'
import  BlueJay from './BirdsSvgComponent/BlueJay'
import  Cardinal from './BirdsSvgComponent/Cardinal'
import  Goldfinch from './BirdsSvgComponent/Goldfinch'
import  Hawk from './BirdsSvgComponent/Hawk'
import  Hummingbird1 from './BirdsSvgComponent/Hummingbird1'
import  Owl from './BirdsSvgComponent/Owl'
import  Robin from './BirdsSvgComponent/Robin'
import  Sparrow from './BirdsSvgComponent/Sparrow'
import  Woodpecker from './BirdsSvgComponent/Woodpecker'
// kitchen
import  Blender from './KitchenSvgComponent/Blender'
import  CoffeeMachine from './KitchenSvgComponent/CoffeeMachine'
import  Crockpot from './KitchenSvgComponent/Crockpot'
import  Dishwasher from './KitchenSvgComponent/Dishwasher'
import  Microwave from './KitchenSvgComponent/Microwave'
import  Mixer from './KitchenSvgComponent/Mixer'
import  Oven from './KitchenSvgComponent/Oven'
import  Refrigerator from './KitchenSvgComponent/Refrigerator'
import  TeaPot from './KitchenSvgComponent/TeaPot'
import  Toster from './KitchenSvgComponent/Toster'

// day of the day
import  Cactus from './DayOfTheDeadSvgComponent/Cactus'
import  Coffin from './DayOfTheDeadSvgComponent/Coffin'
import  DrinkWater from './DayOfTheDeadSvgComponent/DrinkWater'
import  MaxicanSugarSkull from './DayOfTheDeadSvgComponent/MaxicanSugarSkull'
import  MexicanMerigoldFlower from './DayOfTheDeadSvgComponent/MexicanMerigoldFlower'
import  SaltDayOf from './DayOfTheDeadSvgComponent/SaltDayOf'
import  Skeleton from './DayOfTheDeadSvgComponent/Skeleton'
import  Sombrero from './DayOfTheDeadSvgComponent/Sombrero'
import  Tamales from './DayOfTheDeadSvgComponent/Tamales'
import  Tombstone from './DayOfTheDeadSvgComponent/Tombstone'



//Fruits Compo//

import  Apple from './FruitsComponent/Apple'
import  Banana from './FruitsComponent/Banana'
import  Grapefruit from './FruitsComponent/Grapefruit'
import  Grapes from './FruitsComponent/Grapes'
import  Kiwi from './FruitsComponent/Kiwi'
import  Melon from './FruitsComponent/Melon'
import Peach   from './FruitsComponent/Peach'
import Pears   from './FruitsComponent/Pears'
import Pineapple   from './FruitsComponent/Pineapple'
import Strawberry   from './FruitsComponent/Strawberry'

//Fruits Compo// 

//Garden Component
import  Clippers from './GardenComponent/Clippers'
import  GardenHose from './GardenComponent/GardenHose'
import  GardeningGloves from './GardenComponent/GardeningGloves'
import  LawnMower from './GardenComponent/LawnMower'
import  PatchGrass from './GardenComponent/PatchGrass'
import  RubberBoots from './GardenComponent/RubberBoots'
import  Shovel from './GardenComponent/Shovel'
import  Sunflower from './GardenComponent/Sunflower'
import  Trowel from './GardenComponent/Trowel'
import  Wheelbarrow from './GardenComponent/Wheelbarrow'
//Garden Component


//Farm_Animal//
  import Bull   from './FarmAnimalsComponent/Bull'
  import Chicken   from './FarmAnimalsComponent/Chicken'
  import Cow   from './FarmAnimalsComponent/Cow'
  import Donkey   from './FarmAnimalsComponent/Donkey'
  import  Goat    from './FarmAnimalsComponent/Goat'
  import  Goose    from './FarmAnimalsComponent/Goose'
  import  Horse    from './FarmAnimalsComponent/Horse'
  import  Pig      from './FarmAnimalsComponent/Pig'
  import  Sheep    from './FarmAnimalsComponent/Sheep'
  import  SheepDog    from './FarmAnimalsComponent/SheepDog'
//Farm_Animal//


//Fitmess SVG

      import AppleFitness   from './FitnessComponent/AppleFitness'
      import Barbells   from './FitnessComponent/Barbells'
      import Bicycler   from './FitnessComponent/Bicycler'
      import GrapesFitness   from './FitnessComponent/GrapesFitness'
      import Muscle   from './FitnessComponent/Muscle'
      import Runner   from './FitnessComponent/Runner'
      import StationaryBike   from './FitnessComponent/StationaryBike'
      import Treadmill   from './FitnessComponent/Treadmill'
      import Weightlifer   from './FitnessComponent/Weightlifer'
      import Yoga   from './FitnessComponent/Yoga'
//Fitness SVG


import  Brontosaurus from './DinosaursComponent/Brontosaurus'
import  Dimetrodon from './DinosaursComponent/Dimetrodon'
import  Parasaurolophus from './DinosaursComponent/Parasaurolophus'
import  Plesiosaurus from './DinosaursComponent/Plesiosaurus'
import  Pterodactyl from './DinosaursComponent/Pterodactyl'
import  Spinosaurus from './DinosaursComponent/Spinosaurus'
import  Stegosaurus from './DinosaursComponent/Stegosaurus'
import  Triceratops from './DinosaursComponent/Triceratops'
import  TyrannosaurusRex from './DinosaursComponent/TyrannosaurusRex'
import  Velociraptor from './DinosaursComponent/Velociraptor'

import Popcorn from './foodSvg/popcornComponent'
import Steak from './foodSvg/steakComponent' 
import Pizza from './foodSvg/pizzaComponent' 
import Pie from './foodSvg/pieComponent' 
import FrenchFries from './foodSvg/frenchFriesComponent' 
import Colorpicker from './colorPickerComponent'

//Crismass Svg
import Bells   from './ChristmasComponent/Bells'
import ChristmasWreath   from './ChristmasComponent/ChristmasWreath'
import ChristmasTree   from './ChristmasComponent/ChristmasTree'
import GingerbreadMan   from './ChristmasComponent/GingerbreadMan'
import Mistletoe   from './ChristmasComponent/Mistletoe'
import Ornament   from './ChristmasComponent/Ornament'
import PresentChristmas   from './ChristmasComponent/PresentChristmas'
import Reindeer   from './ChristmasComponent/Reindeer'
import Snowflake   from './ChristmasComponent/Snowflake'
import Snowman   from './ChristmasComponent/Snowman'
//Crismass Svg

//Medieval SVG
import BowandArrow   from './MedivalComponent/BowandArrow'
import Castle   from './MedivalComponent/Castle'
import Catapult   from './MedivalComponent/Catapult'
import CrossedSwords   from './MedivalComponent/CrossedSwords'
import FireBreathingDragon   from './MedivalComponent/FireBreathingDragon'
import FlyingDragon   from './MedivalComponent/FlyingDragon'
import Knight   from './MedivalComponent/Knight'
import Lady   from './MedivalComponent/Lady'
import StandingDragon   from './MedivalComponent/StandingDragon'
import Throne   from './MedivalComponent/Throne'

//Medieval Svg

//Graduations Svg
import Balloon   from './GraduationsComponent/Balloon'
import Collage   from './GraduationsComponent/Collage'
import CongratsBanner   from './GraduationsComponent/CongratsBanner'
import DiplomaFull   from './GraduationsComponent/DiplomaFull'
import DiplomaScrolled   from './GraduationsComponent/DiplomaScrolled'
import Flowers   from './GraduationsComponent/Flowers'
import GraduationRobe   from './GraduationsComponent/GraduationRobe'
import GraduationBanner   from './GraduationsComponent/GraduationBanner'
import Mortarboard   from './GraduationsComponent/Mortarboard'
import ThrowingHats   from './GraduationsComponent/ThrowingHats'
//Graduations SVG


//India Svg
   import     Cobra  from   './IndianSvgComponent/Cobra'
   import     CowIndia  from   './IndianSvgComponent/CowIndia'
   import     Elephant  from   './IndianSvgComponent/Elephant'
   import     IndianMan  from   './IndianSvgComponent/IndianMan'
   import     IndianWoman  from   './IndianSvgComponent/IndianWoman'
//India Svg
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
export default {
   components:{
      //Graduations
      Balloon,
      Collage,
      CongratsBanner,
      DiplomaFull,
      DiplomaScrolled,
      Flowers,
      GraduationRobe,
      GraduationBanner,
      Mortarboard,
      ThrowingHats,
      //Graduations
      //Medieval
      BowandArrow,
      Castle,
      Catapult,
      CrossedSwords,
      FireBreathingDragon,
      FlyingDragon,
      Knight,
      Lady,
      StandingDragon,
      Throne,
      //Medieval

      //Crishmas 
      Bells,
      ChristmasWreath,
      ChristmasTree,
      GingerbreadMan,
      Mistletoe,
      Ornament,
      PresentChristmas,
      Reindeer,
      Snowflake,
      Snowman,
      //Crishmas


       HoverEdit,
       BullDogSvg,
       Hippo,
       Llama,
       Mouse,
       Squirrel,
       Atom,
       Calculator,
       Compass,
       Proctor,
       Ruler,
       School,
       SchoolBus,
       Books,
       TestTube,
       WorldGlobe,
       Beagle,
       Boxer,
       BullDog,
       FrenchBullDog,
       GermanShepherd,
       GoldenRetriever,
       Labrador,
       Poodle,
       Rottweiler,
       YorkshireTerrier,
       Bathtub,
       FoldedTowels,
       Handsoap,
       Raser,
       RubberDuck,
       Sink,
       Toilet,
       ToiletPaper,
       Toothbrush,
       Towelonholder,
       Boillingport,
       Butcherknife,
       Cheesegrater,
       ChefHat,
       Cuttingboard,
       CuttingKnivesinBlock,
       PepperShaker,
       Salt,
       Shaker,
       Skillet,
       CompactDisk,
       Drum,
       Earbuds,
       Headphones,
       Megaphone,
       Microphone,
       MusicNotes,
       RecordAlbum,
       Guitar,
       Piano,
       BigBen,
       BritishPounds,
       BuckinghamPalace,
       Crown,
       Doubledeckerbus,
       FlagofEngland,
       Stonehenge,
       TowerBridge,
       UnionJackflag,
       Redtelephonebox,
       BeerMug,
       BeerStein,
       BottleBeer,
       CannedBeer,
       Champagne,
       Margarita,
       Martini,
       MixedDrink,
       WineBottle,
       WineGlass,
       Balloons,
       BirthdayBanner,
       BirthdayCard,
       Cake,
       Candles,
       ChampagneBottle,
       Clown,
       PartyHat,
       Present,
       Toy,
       AirBalloon,
       AirTrafficTower,
       Blimp,
       Bomber,
       Cloud,
       Helecoptor,
       JetPlane,
       FlightAttendant,
       Pilot,
       PropPlane,
       Bible,
       Chick,
       Church,
       Cross,
       Daffodils,
       EasterBunny,
       EasterEgg,
       EasterEggBasket,
       RisenChrist,
       Tulips,
       Aquarius,
       Aries,
       Cancer,
       Capricorn,
       Gemini,
       Leo,
       Libra,
       Pisces,
       Sagittarius,
       Scorpio,
       Taurus,
       Virgo,
       Ant,
       Centipede,
       Cockroach,
       Cricket,
       Fly,
       Grasshopper,
       LadyBug,
       Spider,
       Tick,
       Worm,
       BaldEagle,
       CookOut,
       Fireworks,
       Ribbon,
       Stars,
       StatueOfLiberty,
       Stripes,
       UncleSam,
       UsaFlag,
       CornucopiaBasket,
        Harvest,
        FallingLeaves,
        Hat,
        Jacket,
        LeavesFalling,
        LeavesChangingColor,
        Pumpkin,
        PumpkinPie,
        Sweater,
        Alphabet,
        BabyFeet,
        BalloonsBaby,
        BibBaby,
        CongratulationsBanner,
        Crib,
        PresentBaby,
        Rattle,
        Stork,
        TeddyBear,
        Anubis,
        Camel,
        EgyptianCat,
        Egyptianhieroglyphs,
        EyeOfRa,
        Mummy,
        Pyramid,
        QueenNefertiti,
        Scarab,
        Sphinx,

        // baby girl
        BabyBib,
        BabyBottle,
        BabyDoll,
        Cradle,
        GirlBanner,
        Pacifier,
        RubberDucky,
        StorkBaby,
        SwaddledBaby,
        TeddyBearGirl,

        // birds
        Bluebird,
        BlueJay,
        Cardinal,
        Goldfinch,
        Hawk,
        Hummingbird1,
        Owl,
        Robin,
        Sparrow,
        Woodpecker,

        // kitchen
        Blender,
        CoffeeMachine,
        Crockpot,
        Dishwasher,
        Microwave,
        Mixer,
        Oven,
        Refrigerator,
        TeaPot,
        Toster,

        // day of day
        Cactus,
        Coffin,
        DrinkWater,
        MaxicanSugarSkull,
        MexicanMerigoldFlower,
        SaltDayOf,
        Skeleton,
        Sombrero,
        Tamales,
        Tombstone,
        //Fruits//
          Apple,
          Banana,
          Grapefruit,
          Grapes,
          Kiwi,
          Melon,
          Peach,
          Pears,
          Pineapple,
          Strawberry,
        //Fruits//
        //Garden
        Clippers,
        GardenHose,
        GardeningGloves,
        LawnMower,
        PatchGrass,
        Shovel,
        Sunflower,
        Trowel,
        Wheelbarrow,
        RubberBoots,        
        //GArden.

        //Dinosaurs
        Brontosaurus,
        Dimetrodon,
        Parasaurolophus,
        Plesiosaurus,
        Pterodactyl,
        Spinosaurus,
        Stegosaurus,
        Triceratops,
        TyrannosaurusRex,
        Velociraptor,
        //Dinosaurs

         //FARM //
          Bull,
          Chicken,
          Cow,
          Donkey,
          Goat,
          Goose,
          Horse,
          Pig,
          Sheep,
          SheepDog,
        //FARM//

        //Fitness
        AppleFitness,
        Barbells,
        Bicycler,
        GrapesFitness,
        Muscle,
        Runner,
        StationaryBike,
        Treadmill,
        Weightlifer,
        Yoga,
        //Fitness
       //India_SVG
        Cobra,
        CowIndia,
        Elephant,
        IndianMan,
        IndianWoman,

       //India_SVG
       Popcorn,
       Steak,
       Pizza,
       Pie,
       FrenchFries,
       Colorpicker
   },
   data(){
     return {
        openModal:false,
        ShowEditor:false,
        id:'',
        test:'#000',
        xAxis:'12px',
        yAxis:'75px'
     }
   },
   mounted(){
   
    //  var idValue =this.dynamicIndex
      
   },
  computed:{
      ...mapState([
          'divData',
          'SvgComponent',
          'dynamicIndex',
          'dynamicName'
      ]),
      data:{
          get(){
              return this.$store.state.AnimalIconArray
          },
          set(newValue){
              return console.log(newValue)
          }
      },
      url:{
        get(){
          return this.$store.state.urlSvg
        },
        set(newValue){
            return console.log(newValue)
        }
      },
      AllSvgUrl:{
        get(){
          return this.$store.state.urlSvgArray
        },set(newValue){
            return console.log(newValue)
        }
      },
      testValue:{
         get(){
          return this.$store.state.divData
        },set(newValue){
            return console.log(newValue)
        }
      },
      dataSvgComponent:{
        get(){
          return this.$store.state.SvgComponent
        },
        set(newValue){
            return console.log(newValue)
        }
      }
  }, 
  methods:{
    ...mapActions([
        'ACTION_CHANGE_STATE',
        'ACTION_PUSH_TO_SVG'
    ]),
    ...mapMutations([
              
    ]),
    drop(e){
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      this.addSvg(data)
    },
    allowDrop(ev){
       ev.preventDefault();
    },
    addSvg (SvgName) {
     
      var x = $('#bullDogSvg').val()
        
      this.ACTION_PUSH_TO_SVG(SvgName)
      this.ACTION_CHANGE_STATE(['dynamicIndex' ,x])
      x++
      $('#bullDogSvg').val(x)
      
    },
  }
}
</script>

<style>

</style>