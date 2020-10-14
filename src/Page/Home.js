import React, { Component} from 'react';
import {Link} from 'react-router-dom';


import Item from './item';
import Service from './Service';
import Menu from './Menu';

const sumber = [
	{src:'images/dashboard_full_1.jpg'},
	{src:'images/dashboard_full_2.jpg'},
	{src:'images/dashboard_full_3.jpg'}
]

const services = [
	{icon : 'icon-browser', title: 'Create your own template', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
	{icon : 'icon-download', title: 'Automatic Backup Data', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
	{icon : 'icon-layers', title: 'Page Builder', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'}
]

class Home extends Component {
  render() {
    return(
		<div>
			<Menu></Menu>

		<section id="home" class="video-hero"  data-section="home" >
		<img style={{height: '700px', width:'1348px'}}class="img-responsive" src="images/cover_img_1.jpg" alt=""/>
		<div class="overlay">
			<div class="player" data-property="{videoURL:'https://www.youtube.com/watch?v=vqqt5p0q-eU',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></div>
			<div class="display-t text-center">
				<div class="display-tc">
					<div class="container">
						<div class="col-md-12 col-md-offset-0">
							<div class="animate-box">
								<h2>Take on your biggest projects and goals</h2>
								<p>with Unapp's high quality features</p>
								<p><Link to="/" class="btn btn-primary btn-lg btn-custom">Get premium</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</section>

		<div class="colorlib-featured">
			<div class="row animate-box">
				<div class="featured-wrap">
					<div class="owl-carousel">
						{sumber.map((sumber,index) => {
							return <Item {...sumber} key={index}/>
						})}
					</div>
				</div>
			</div>
		</div>
		
		<div class="colorlib-services colorlib-bg-white">
			<div class="container">
				<div class="row">
					{services.map((services,index) => {
						return <Service {...services} key={index}/>
					})}
				</div>
			</div>
		</div>

		</div>
        
    )
  }
}

export default Home;