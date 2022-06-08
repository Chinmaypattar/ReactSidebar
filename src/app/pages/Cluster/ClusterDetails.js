import React, { Component } from 'react'
import Layout from '../../components/SideBar/Layout'
import Button from '../../components/Button/Button'
export default class ClusterDetails extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount() {
        console.log("THIS",this.props);
    }
  render() {
    return (
   <Layout {...this.props}>
<div className='cluster-details'>
    <div className='row'>
        <div className='col-md-3'>
        <p className='text-left'>Cluster ID: {}</p>
        <p className='text-left'>Name :{}</p>
        </div>
        <div className='col-md-3'>
        <p className='text-left'>Created Date: {}</p>
        <p className='text-left'>Updated Date :{}</p>
        </div>
        <div className='col-md-2 text-left'>
        <p>State: {}</p>
     <Button colorClass='primary'> Stop </Button>
        </div>
        <div className='col-md-4'>
        <Button colorClass='primary'> Stop </Button>
      <button>Edit Cluster</button>
        <Button colorClass='primary'> Stop </Button>
        </div>

    </div>
</div>
   </Layout>
    )
  }
}
