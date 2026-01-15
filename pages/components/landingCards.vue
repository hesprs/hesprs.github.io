<template>
	<div class="about-content first" style="grid-template-columns: 2fr 3fr">
		<article class="s-card card-enhance hello">
			<span class="title"
				>Hello 👋<br />I am Hēsperus,
			</span>
			<span class="text">
				High school student • Open-source developer
				<br />
				Futuristic visionary • Classics enthusiast
			</span>
		</article>
		<article class="s-card card-enhance about-name img-mask">
			<span class="tip">About My Name</span>
			<br />
			<span class="text">
				<em>Hēsperus</em>, in Greek mythology, is the name of <strong>planet Venus </strong>appearing
				in the twilight.
			</span>
			<span class="text"
				><code>Hesprs</code>is often used as my social media identifiers. While the website name
				<code>Hēsperī</code>means "About Hēsperus".
			</span>
		</article>
	</div>
	<LandingCarousel />
	<h1 style="margin-bottom: 24px">More About Me</h1>
	<div class="about-content" style="grid-template-columns: 2fr 3fr">
		<article class="s-card card-enhance skills">
			<span class="tip">Skills</span>
			<br />
			<div class="skills-list">
				<a
					v-for="(item, index) in skills"
					:key="index"
					:style="{ '--color': item.color }"
					:href="item.link"
					class="skills-item"
					target="_blank"
				>
					<component class="skills-logo" :is="item.icon" />
					{{ item.name }}
				</a>
			</div>
		</article>
		<article class="s-card card-enhance personality">
			<span class="tip">Personality</span>
			<br />
			<div class="box">
				<div class="item s-card concave">
					<span class="tip">Enneagram Type</span>
					<span class="title"
						>Type <span class="title large">5</span><span
							style="color: var(--vp-c-brand-1); font-size: 20px;"
							>w4
						</span></span
					>
				</div>
				<div class="item s-card concave">
					<span class="tip">MBTI</span>
					<span class="title large"
						>INTJ<span style="color: var(--vp-c-brand-1); font-size: 20px;">-T </span></span
					>
				</div>
			</div>
			<span class="more">
				Learn more about
				<a href="https://www.enneagraminstitute.com/type-5/" target="_blank">Type-5</a>&nbsp;and <a
					href="https://www.16personalities.com/intj-personality"
					target="_blank"
					>INTJ</a
				>
			</span>
		</article>
	</div>
	<div class="about-content" style="grid-template-columns: 3fr 2fr">
		<article class="s-card card-enhance architecture img-mask">
			<span class="tip">Favorite Art Styles</span>
			<br />
			<span class="title large">Neo-Classicism</span>
			<span class="title">Brutalism / Futurism</span>
		</article>
		<article class="s-card card-enhance perspectives">
			<span class="tip">Perspectives</span>
			<br />
			<div class="skills-list">
				<div
					v-for="(item, index) in perspectives"
					:key="index"
					class="skills-item"
					:title="item.title"
				>
					<component class="icon" :is="item.icon" />
					<span class="skills-name">{{ item.name }}</span>
				</div>
			</div>
		</article>
	</div>
	<div class="about-content" style="grid-template-columns: 1fr 1fr">
		<article class="s-card card-enhance like image era">
			<span class="tip">Favorite Historical Period</span>
			<span class="title large">Victorian Era</span>
			<span class="image-desc">"It was the best of times, it was the worst of times."</span>
		</article>
		<article class="s-card card-enhance like image game">
			<span class="tip">Favorite Game</span>
			<span class="title large">Stellaris</span>
			<span class="image-desc">"Our fleets will blot out the sun, as many suns as it takes."</span>
		</article>
	</div>
</template>

<script lang="ts" setup>
import {
	IconBlendMode,
	IconBrandBlender,
	IconBrandFigma,
	IconBrandGit,
	IconBrandJavascript,
	IconBrandPython,
	IconBrandSass,
	IconBrandTypescript,
	IconBrandVue,
	IconCell,
	IconGenderTransgender,
	IconSettingsBolt,
	IconWorldHeart,
} from '@tabler/icons-vue';
import LandingCarousel from './landingCarousel.vue';

const skills = [
	{
		name: 'JavaScript',
		color: '#EFD81C',
		icon: IconBrandJavascript,
		link: 'https://developer.mozilla.org/docs/Web/JavaScript',
	},
	{
		name: 'TypeScript',
		color: '#3178C6',
		icon: IconBrandTypescript,
		link: 'https://www.typescriptlang.org/',
	},
	{
		name: 'SCSS',
		color: '#CF649A',
		icon: IconBrandSass,
		link: 'https://sass-lang.com/',
	},
	{
		name: 'Vue',
		color: '#41b883',
		icon: IconBrandVue,
		link: 'https://vuejs.org/',
	},
	{
		name: 'Python',
		color: '#3776AB',
		icon: IconBrandPython,
		link: 'https://www.python.org/',
	},
	{
		name: 'Git',
		color: '#F05032',
		icon: IconBrandGit,
		link: 'https://git-scm.com/',
	},
	{
		name: 'Figma',
		color: '#0C8CE9',
		icon: IconBrandFigma,
		link: 'https://www.figma.com',
	},
	{
		name: 'Blender',
		color: '#F4792B',
		icon: IconBrandBlender,
		link: 'https://www.blender.org/',
	},
];

const perspectives = [
	{
		name: 'Cosmopolitanism',
		icon: IconWorldHeart,
		title: 'A home world with unified goals, and the path open to the stars.',
	},
	{
		name: 'LGBT Rights',
		icon: IconGenderTransgender,
		title: 'Nothing can be worse than seeing a person being shackled by what is "born to be".',
	},
	{
		name: 'Equality of Opportunity',
		icon: IconBlendMode,
		title: 'The heirs of kings, the kids from slums, all have a equal start.',
	},
	{
		name: 'Anti-Racism',
		icon: IconCell,
		title: 'All races are hallucinations, we share the same identity - the humans.',
	},
	{
		name: 'Techno-Progressivism',
		icon: IconSettingsBolt,
		title: 'Since the beginning of time, our universe has been destined onto an eternal odyssey of progress.',
	},
];
</script>

<style lang="scss" scoped>
.about-content {
	display: grid;
	grid-template-columns: auto auto;
	gap: 20px;
	margin-bottom: 20px;
	article {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1.2rem 2rem;
		overflow: hidden;
        line-height: normal;
        gap: 12px;
        --title: 32px;
        --title-large: 50px;
        @media (max-width: 767px) {
            padding-left: 20px;
            padding-right: 20px;
            --title: 24px;
            --title-large: 42px;
        }
        > * { z-index: 2 }
		.tip {
			font-size: 14px;
			opacity: 0.8;
		}
		.title {
			font-size: var(--title);
			font-weight: bold;
            &.large {
                color: var(--vp-c-brand-1);
                font-size: var(--title-large);
            }
		}
		.text { line-height: 1.5 }
		&.child {
			background-color: transparent;
			border: none;
			box-shadow: none;
			padding: 0;
			gap: 20px;
			.s-card { height: 100% }
		}
		&.hello {
			justify-content: center;
			padding: 2rem;
			color: #fff;
			background-image: linear-gradient(120deg, #5b27ff 0%, #00d4ff 100%);
			background-size: 200% 200%;
			animation: gradientFlow 6s ease infinite;
            @media (max-width: 768px) {
                padding: 1.2em;
                align-items: center;
                .text, .title { text-align: center }
            }
		}
		&.about-name {
            padding-right: 30%;
            &::before {
                background-image: url('/hesprs.jpg');
		    }
        }
		&.personality {
			.more {
				margin-top: auto;
				font-size: 14px;
				color: var(--vp-c-text-2);
				a {
					color: var(--vp-c-text-2);
					&:hover { color: var(--color) }
				}
			}
            .box {
                display: flex;
                gap: 12px;
                .item {
                    padding-left: 24px;
                    padding-right: 24px;
                    position: relative;
		            width: 100%;
		            padding: 1.2rem 2rem;
                    gap: 12px;
                    @media (max-width: 767px) {
                        padding-left: 16px;
                        padding-right: 16px;
                    }
                    display: flex;
                    flex-direction: column;
                }
            }
		}
		&.skills, &.perspectives {
			.skills-list {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
                gap: 10px;
				.skills-item {
					display: flex;
					align-items: center;
                    text-decoration: none;
					padding: 8px 12px 8px 8px;
					background-color: var(--vp-c-bg);
					border: 1px solid var(--vp-c-border);
					box-shadow: 0 8px 12px -4px var(--main-border-shadow);
					transition: background-color 0.3s, color 0.3s;
					.skills-logo {
						width: 32px;
						height: 32px;
                        padding: 4px;
                        overflow: visible;
						margin-right: 8px;
						border-radius: 50%;
						background-color: var(--color);
						color: #fff;
					}
				}
			}
		}
        &.skills .skills-item {
            font-weight: bold;
            border-radius: 40px;
            &:hover { background-color: var(--main-card-background) }
        }
        &.perspectives .skills-list {
            gap: 8px;
            .skills-item {
                padding: 4px 6px 4px 4px !important;
                font-size: small;
                font-weight: normal !important;
                border-radius: 10px;
                > .icon { margin-right: 6px }
            }
        }
        &.architecture::before {
            background-image: url('https://img1.tucang.cc/api/image/show/e9287e92d561e0a07289663a3076bcbc');
        }
		&.like {
			--height: 400px;
			@media (max-width: 768px) { --height: 300px }
            height: var(--height);
		}
		&.image {
			.image-desc {
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				margin-top: auto;
            }
			&::before {
				content: "";
                background-position: center;
			    background-size: cover;
				position: absolute;
				width: 100%;
				bottom: 0;
                box-shadow:
                    inset 0 -70px 204px 10px var(--color),
                    inset 0 0 12px 5px rgba(0,0,0, 0.8);
                height: calc(var(--height) - var(--title-large) - 64px);
				left: 0;
				z-index: 0;
			}
		}
        &.era {
            --color: #ffc6b2;
            .dark & { --color: #4b2c15 }
            &::before {
                background-image: url('https://img1.tucang.cc/api/image/show/992f6c6b1d0c3bc21924edce390a4832');
            }
            
        }
        &.game {
            --color: #afb7ff;
            .dark & { --color: #0c0e20 }
            &::before {
                background-image: url('https://img1.tucang.cc/api/image/show/1deb77598a40d934d3f3adef3fd53913');
            }
        }
	}
	&:last-child { margin-bottom: 0 }
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
}
.first {
	margin-top: 48px;
    @media (min-width: 640px) { margin-top: 64px }
}
.img-mask::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.7), transparent);
    pointer-events: none;
    z-index: 1;
}
</style>
