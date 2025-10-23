"use client";

import { PageHeader, PageSectionHeader } from "@brianwhaley/pixelated-components";
import { Callout } from "@brianwhaley/pixelated-components";
import SocialTags from "@/app/elements/socialtags";


export default function Work() {
    
	return (
		<>
			<PageHeader title="About Me" />

			<section className="section-alt" id="about-section">
				<div className="section-container">
					<div className="row-8col">
						<div className="grid-s1-e8">
							<Callout
								style='boxed'
								layout='horizontal'
								url="/workportfolio"
								img='images/brianwhaley-headshot.jpg'
								title='Work Portfolio'
								content='I am an Information Technology leader accomplished in building and managing global high-performance teams, 
									launching and managing digital products, and developing and executing unified product and technology strategies. 
									I have managed Highly available e-commerce portals, web sites, web applications, and mobile applications, 
									in the media, finance, pharmaceutical, and telecommunications industries, 
									leading departments up to 300 staff, budgets to $50 million, using onshore staff, offshore partners, and hybrid teams'/>
						</div>
					</div>
				</div>
			</section>

			<section className="section" id="career-section">
				<div className="section-container">
					<PageSectionHeader title="Career Overview" />
					<div className="row-3col">
						<Callout
							layout='vertical' 
							url='/resume' 
							img='/images/icons/resume-icon.png'
							imgShape='squircle'
							title='Resume'
							content='A digital version of my curriculum vitae, with a 
								professional summary, contact information, education, skills,
								qualifications, work history, projects, voluteer work, certifications, 
								honors and awards, training and conferences, and rererences.' />
						<Callout
							layout='vertical' 
							url='https://www.linkedin.com/in/brianwhaley' 
							img='/images/logos/linkedin-logo.png'
							imgShape='squircle' 
							title='LinkedIn'
							content='Check out my LinkedIn profile, including my experience, education, licenses and certifications, 
								projects, volunteering, skills, courses, honors and awards, social media activity, 
								and recommendations from peers and teammates.' />
						<Callout
							layout='vertical' 
							url='/readme' 
							img='/images/icons/readme-icon.png'
							imgShape='squircle'
							title='Readme'
							content='The objective of my README is to share who I am, set some expectations, 
								and share management styles. What I don&#39;t want this document to do is dictate how to work with me. 
								I believe that good leaders adjust to the personality styles of the people working with them.' />
						<Callout
							layout='vertical' 
							url='http://twitter.com/brianwhaley' 
							img='/images/logos/x-logo.png'
							imgShape='squircle' 
							title='X (Twitter)'
							content='I use this account to regularly post great articles I come across that strike me on topics such as 
								leadership, coaching, team culture, industry trends, technology topics, architectural patterns, and more. ' />
						<Callout
							layout='vertical' 
							url='https://www.goodreads.com/review/list/49377228-brian-whaley?shelf=books-for-work' 
							img='/images/logos/goodreads-logo.png'
							imgShape='squircle' 
							title='Goodreads'
							content='This Goodreads Shelf is a collection of books that i have found to be 
								invaluable to build, strengthen, and manage my career and leadership skills over my career, 
								i hope these are useful to you too. '/>
						<Callout
							layout='vertical' 
							url='https://github.com/brianwhaley'
							img='images/logos/github-logo.png'
							imgShape='squircle' 
							title='GitHub Portfolio'
							content='This is a link to my GitHub account.  I have only uploaded a few pieces of code.
								Repositories include a library of LotusScripts and agents;
								pilot applications written in jQuery, Angular, React and Node, Spring iOS, and Java Android.  
								I enjoy working most on my component library and using it to rabidly build web sites for small businesses.'/>
					</div>
				</div>
			</section>

			<section className="section-alt" id="social-section">
				<div className="section-container">
					<SocialTags />
					<div className="row-1col">
						<div className="gridItem">
							<div className="callout-body">
								Links to each of my social media accounts and a few recent postings from each,
								including 500px, Ancestry, my Blog, Blurb, eBay, Etsy, Facebook, Flickr, Goodreads,
								Instagram, iStock Photo, LinkedIn, Pinterest, Reddit, Shutterfly, Shutterstock, 
								Twitter, Tumblr, Youtube, and more.
								Check out the use of RSS feeds and APIs to generate dynamic cards on the page
								using my React component library.
								<br/>
							</div>
						</div>
					</div>
				</div>
			</section>
				

			<section className="section" id="personal-section">
				<div className="section-container">
					<PageSectionHeader title="My Personal Side" />
					<div className="row-3col">
						<Callout
							layout='vertical' 
							url="/recipes" 
							img='images/pizza-gaine.jpg'
							imgShape='squircle' 
							title='Family Recipes'
							content='This is my recipe book. It is a collection of recipes from 3 generations of my family, 
								from my friends, and my life as an Italian-American and as a Bariatric Patient. 
								I have cooked most of the recipes myself. I have tasted them all, however, 
								and they are fantastic! Please enjoy!'/>
						<Callout
							layout='vertical' 
							url='https://www.pixelvivid.com/photography' 
							img='https://farm6.staticflickr.com/5682/21652998256_7c5d0ce495_b.jpg'
							imgShape='squircle' 
							title='Stock Photography'
							content='I have converted my passion of Landscape, Macro, and Travel Photography 
								into a budding Stock Photography Portfolio.  Check out my work on 
								iStockPhoto or ShutterStock, or see my books on Blurb or Shutterfly. '/>
						<Callout
							layout='vertical' 
							url='https://www.pixelvivid.com/customsunglasses' 
							img='/images/customs/blue-splatter-3.jpg'
							imgShape='squircle' 
							title='Custom Sunglasses'
							content='I refurbish, repair, and customize Oakley sunglasses. 
								I enjoy providing custom paint jobs with a splash of colors - 
								marbled, splattered, and dripped. Custom paint can be one color, 
								or a combination of complimentary colors. Patterns can also be small or large, 
								thin or thick, dense or sparse.  As the customer, you choose!'/>
					</div>
				</div>
			</section>
		</>
	);
}
