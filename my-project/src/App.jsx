import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import Profile from './Profile';
import Service from './Service';
import ChngKey from './ChngKey';
import Gray from './Gray';
import GrayTwo from './GrayTwo';
import GrayThree from './GrayThree';
import Music from './Music';
import Djs from './Djs';
import Mcs from './Mcs';
import Comedy from './Comedy';
import Dancer from './Dancer';
import Sound from './Sound';
import Upcoming from './Upcoming';
import Coming from './Coming';
import Details from './Details';
import Details2 from './Details2';
import Details3 from './Details3';
import Entertainment from './Entertainment';
import DJs   from './entertainment/DJs';
import MCs from './entertainment/MCs';
import Comedian from './entertainment/Comedian';
import Dancers from './entertainment/Dancers';
import Musics from './entertainment/Musics';
import Sounds from './entertainment/Sounds';
import SecurityAdmin from './security/SecurityAdmin';
import Security from './security/Security';
import CateringAdmin from './catering/CateringAdmin'; 
import Catering from './catering/Catering';
import AdminPhoto from './photography/AdminPhoto';
import Photography from './photography/Photography';
import AdminVideo from './videography/AdminVideo';
import Video from './videography/Video';


const App = () => {
  return (
    <div>

            <Router>
              <Routes>
                
                  <Route path='/' element={<Home/>}/>
                  <Route path='/events' element={<Events/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                  <Route path='/service' element={<Service/>}/>
                  <Route path='/changePassword' element={<ChngKey/>}/>

                  <Route path='/gray' element={<Gray/>}/>
                  <Route path='/grayTwo' element={<GrayTwo/>}/>
                  <Route path='/grayThree' element={<GrayThree/>}/>

                  <Route path='/music' element={<Music/>}/>
                  <Route path='/djs' element={<Djs/>}/>
                  <Route path='/comedian' element={<Comedy/>}/>
                  <Route path='/dancer' element={<Dancer/>}/>
                  <Route path='/sound' element={<Sound/>}/>
                  <Route path='/mcs' element={<Mcs/>}/>

                  <Route path='/venues' element={<Upcoming/>}/>
                  <Route path='/events' element={<Coming/>}/>
                  <Route path='/events/:id' element={<Details/>}/>
                  <Route path='/:id' element={<Details3/>}/>
                  <Route path='/venues/:id' element={<Details2/>}/>
                  <Route path='/entertainment' element={<Entertainment/>}/>

                  <Route path='/entertainment/djs' element={<DJs/>} />
                  <Route path='/entertainment/mcs' element={<MCs/>} />
                  <Route path='/entertainment/comedian' element={<Comedian/>} />
                  <Route path='/entertainment/dancers' element={<Dancers/>} />
                  <Route path='/entertainment/musics' element={<Musics/>} />
                  <Route path='/entertainment/sounds' element={<Sounds/>} />

                  <Route path='/security' element={<SecurityAdmin/>} />
                  <Route path='/securities' element={<Security/>}/>

                  <Route path='/catering' element={<CateringAdmin/>} />
                  <Route path='/caterings' element={<Catering/>} />

                  <Route path='/photography' element={<AdminPhoto/>} />
                  <Route path='/photographies' element={<Photography/>} />

                  <Route path='/videography' element={<AdminVideo/>} />
                  <Route path='/videographies' element={<Video/>} />

                  <Route path="/signUp" element={<SignUp/>} />
                  <Route path="/signIn" element={<SignIn/>} />
                  
              </Routes>
            </Router>

    </div>
  )
}

export default App