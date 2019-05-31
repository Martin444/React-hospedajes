import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

// Lo mismo pero mas barato
function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context

    if(loading){
                     return <Loading/>
               }
               return <>
                  
                    <RoomsFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
               </>

}

export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomContainer() {
//     return (

//         <RoomConsumer>
//             {/* traigo los valores del context */}
//             {
//         (value) => {
//             const {loading, sortedRooms, rooms} = value

//                 if(loading){
//                       return <Loading/>
//                 }
//                 return <div>
//                    hola desde roomcontainer
//                     <RoomsFilter rooms={rooms}/>
//                     <RoomList rooms={sortedRooms}/>
//                 </div>
            
//         }
//     }
//     </RoomConsumer>
            
//     )
// }
