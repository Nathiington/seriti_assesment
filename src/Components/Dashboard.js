import React from 'react'
import Sidebar from './Sidebar'
import LineChart from './LineChart'
import PieChart from './PieChart'
import {Card,Grid} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import {faStar, faUsers } from '@fortawesome/free-solid-svg-icons'


export default function Dashboard() {
    return (
        // Grey background
        <div style={{ backgroundColor:'#e5e5e5', height:'100%'}}>
            {/* Sidebar and Navbar */}
            <Sidebar/>
            {/* Card Header */}
            <Grid container direction="row" justify="center" alignItems="center">
                {/* Users Carrd */}
                <Grid item md={3} xs={12} sm={6} lg={3}>
                    <Card elevation={2} style={{height:'90px', width:'300px'}}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item md={4} xs={6} sm={6} lg={4} style={{ backgroundColor: '#009688' }}>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Grid item>
                                        <FontAwesomeIcon color="white" icon={faUsers} size="3x" style={{ marginTop: '20px', marginBottom: '30px'}} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8} xs={6} sm={6} lg={8}>
                                <Grid container direction="column" justify="center" alignItems="flex-start" style={{ marginLeft: '15px', fontFamily:'arial', fontWeight:'bold' }}>
                                    <Grid item style={{fontSize:'24px'}}>Users</Grid>
                                    <Grid item style={{ fontSize: '16px' }}>5</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                {/* Likes Card */}
                <Grid item md={3} xs={12} sm={6} lg={3}>
                    <Card elevation={2} style={{ height: '90px', width: '300px' }}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item md={4} xs={6} sm={6} lg={4} style={{ backgroundColor: '#14a2b8' }}>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Grid item><FontAwesomeIcon color="white" icon={faThumbsUp} size="3x" style={{ marginTop: '20px',  marginBottom: '30px' }} /></Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8} xs={6} sm={6} lg={8}>
                                <Grid container direction="column" justify="center" alignItems="flex-start" style={{ marginLeft: '15px', fontFamily: 'arial', fontWeight: 'bold' }}>
                                    <Grid item style={{ fontSize: '24px' }}>Like</Grid>
                                    <Grid item style={{ fontSize: '16px' }}>25</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                {/* Uploads Card */}
                <Grid item md={3} xs={12} sm={6} lg={3}>
                    <Card elevation={2} style={{ height: '90px', width: '300px' }}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item md={4} xs={6} sm={6} lg={4} style={{ backgroundColor: '#ffc108' }}>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Grid item><FontAwesomeIcon color="white" icon={faCopy} size="3x" style={{ marginTop: '20px', marginBottom: '30px' }} /></Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8} xs={6} sm={6} lg={8}>
                                <Grid container direction="column" justify="center" alignItems="flex-start" style={{ marginLeft: '15px', fontFamily: 'arial', fontWeight: 'bold' }}>
                                    <Grid item style={{ fontSize: '24px' }}>Uploads</Grid>
                                    <Grid item style={{ fontSize: '16px' }}>10</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                {/* Stars Card */}
                <Grid item md={3} xs={12} sm={6} lg={3}>
                    <Card elevation={2} style={{ height: '90px', width: '300px' }}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item md={4} xs={6} sm={6} lg={4} style={{ backgroundColor: '#dc3545' }}>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Grid item><FontAwesomeIcon color="white" icon={faStar} size="3x" style={{ marginTop: '20px', marginBottom: '30px' }} /></Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8} xs={6} sm={6} lg={8}>
                                <Grid container direction="column" justify="center" alignItems="flex-start" style={{ marginLeft: '15px', fontFamily: 'arial', fontWeight: 'bold' }}>
                                    <Grid item style={{ fontSize: '24px' }}>Stars</Grid>
                                    <Grid item style={{ fontSize: '16px' }}>500</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>

            {/* Main Body */}
            <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: '40px', paddingBottom: '53px'}}>
                {/* Styling Grid(No functional purpose) */}
                <Grid></Grid>
                {/* Monthly Sales Card */}
                <Grid item md={6} lg={6} xs={12} sm={12}>
                    <Card style={{maxWidth:'635px',height:'400px'}}>
                        <div style={{ fontFamily: 'arial', fontWeight: 'bolder', fontSize: '24px', marginTop: '15px', marginLeft: '15px'}}>Monthly Sales</div>
                        <br/>
                        <LineChart/>
                    </Card>
                </Grid>
                {/* Styling Grid(No functional purpose) */}
                <Grid></Grid>
                {/* Support Requests Card */}
                <Grid item md={6} lg={6} xs={12} sm={12}>
                    <Card style={{ maxWidth: '635px', height: '400px' }}>
                        <div style={{ fontFamily: 'arial', fontWeight: 'bolder', fontSize: '24px', marginTop: '15px', marginLeft: '15px'}} >Support Requests</div>
                        <br/>
                        <PieChart/>
                    </Card>
                </Grid>
                {/* Styling Grid(No functional purpose) */}
                <Grid></Grid>
            </Grid>
        </div>
    )
}
