// import React, { Component } from 'react'
// import Header from '../component/header'
// import Footer from '../component/footer'



// export class profile extends Component {
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <p> <h2>   mon profile  </h2></p>
//                 <Footer/>
//             </div>
//         )
//     }
// }

// export default profile
import React from 'react'
export default class extends React.Component {
//   static async getInitialProps ({ req }) {
//       if (req.user)
//             return  { userAgent: req.user.email}
//      return  { userAgent: 'req.user.email'}
    
//   }
  render () {
    return <div>
      {/* Hello World {this.props.userAgent} */}
      hello yassine
    </div>
  }
}
