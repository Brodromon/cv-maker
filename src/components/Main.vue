<template>
  <div class="main-container">
    <Header></Header>
    <Sidebar class="col-md-2"></Sidebar>
    <div class="container col-md-8 col-md-offset-2">
      <div id="resume">
        <div v-on:click="resumeHdrEdit(resumeHdr.person, resumeHdr.id)" class="block resume__hdr row">
          <div class="col-md-6">
            <div id="name">
              <h3>{{resumeHdr.person.fname}} {{resumeHdr.person.lname}}</h3>
            </div>
          </div>
          <div class="col-md-5 col-md-offset-1">
            <ul id="adress">
              <li><span>Number:</span> {{resumeHdr.person.personData.number}}</li>
              <li><span>E-mail:</span> {{resumeHdr.person.personData.email}}</li>
              <li><span>Adress:</span> {{resumeHdr.person.personData.adress}} st.</li>
            </ul>
          </div>
        </div>
        <div v-on:click="resumeAboutEdit(resumeAbout, resumeAbout.id)" class="block resume__about row">
          <div class="col-md-10 col-md-offset-1">
            <h5 class="block__hdr">
              About me
            </h5>
            <p class="col-md-12">
              {{resumeAbout.text}}
            </p>
          </div>
        </div>
        <hr>
        <div v-on:click="resumeEduEdit(resumeEdu.eduPlaces, resumeEdu.id)" class="block resume__edu row">
          <div class="col-md-10 col-md-offset-1">
            <h5 class="block__hdr">Education</h5>
            <ul class="resume__edu__places">
              <li v-for="place in resumeEdu.eduPlaces" class="col-md-6">
                <h3>{{place.placeName}}</h3>
                <h4>{{place.graduate}}</h4>
                <h5>{{place.city}}, {{place.country}}</h5>
                <i>{{place.startYear}} - {{place.endYear}} yy</i>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div v-on:click="resumeExpEdit(resumeExp.expPlaces, resumeExp.id)" class="block resume__exp row">
          <div class="col-md-10 col-md-offset-1">
            <h5 class="block__hdr">Experience</h5>
            <ul class="resume__exp__places">
              <li v-for="expPlace in resumeExp.expPlaces" class="row">
                <div class="exp__place col-md-6">
                  <h3 class="exp__place__position">{{expPlace.position}}</h3>
                  <h4 class="exp__place__corp">{{expPlace.compName}}</h4>
                  <h5 class="exp__place__date">{{expPlace.startYear}} - {{expPlace.endYear}} yy</h5>
                </div>
                <div class="exp__desc col-md-6">
                  {{expPlace.desc}}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div v-on:click="resumeSkillsEdit(resumeSkills.skills, resumeSkills.id)"  class="block resume__skills row">
          <div class="col-md-10 col-md-offset-1">
            <h5 class="block__hdr">Skills</h5>
            <ul class="row skills">
              <li v-for="skill in resumeSkills.skills" class="skill col-md-3">
                <p>{{skill}}</p>
              </li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../bus/index.js'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      resumeHdr: {
        person: {
          fname: 'Sviatoslav',
          lname: 'Pavelko',
          personData: {
            number: '+48 333 223 123',
            email: 'example@example.com',
            adress: 'Polska 29'
          }
        },
        id: 'Header'
      },
      resumeAbout: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam alias consequuntur voluptas esse doloribus vel eaque nobis adipisci aspernatur tempora voluptatibus quae incidunt distinctio sint, quaerat dicta magni magnam?Illum, molestiae dignissimos accusamus perferendis voluptatem possimus natus exercitationem, ex vel repudiandae eos blanditiis pariatur dolor mollitia maxime ullam sit optio soluta labore quibusdam sunt eum fuga? Cumque, itaque nam.',
        id: "About"
      },
      resumeEdu: {
        eduPlaces: [
          {
            placeName: 'WSG',
            graduate: 'Graduate',
            city: 'Bydgoszcz',
            country: 'Poland',
            startYear: '2017-09-01',
            endYear: '2020-03-01',
            error: false,
            closed: true
          },
          {
            placeName: 'NAU',
            graduate: 'Graduate',
            city: 'Kyiv',
            country: 'Ukraine',
            startYear: '2017-09-01',
            endYear: '2020-03-01',
            error: false,
            closed: true
          },
          {
            placeName: 'KPI',
            graduate: 'Graduate',
            city: 'Kyiv',
            country: 'Ukraine',
            startYear: '2017-09-01',
            endYear: '2020-03-01',
            error: false,
            closed: true
          }
        ],
        id: "Education"
      },
      resumeExp: {
        expPlaces: [
          {
            position: 'Programista www',
            compName: 'RegRu Inc.',
            startYear: '2012-05-12',
            endYear: '2017-05-12',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti aliquid vel optio dolores doloremque delectus. Ipsa enim at eveniet quibusdam minus aut quas voluptatem eligendi, ipsam odit cupiditate laborum vel.',
            error: false,
            closed: true
          },
          {
            position: 'Programista www',
            compName: 'RegRu Inc.',
            startYear: '2012-05-12',
            endYear: '2017-05-12',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti aliquid vel optio dolores doloremque delectus. Ipsa enim at eveniet quibusdam minus aut quas voluptatem eligendi, ipsam odit cupiditate laborum vel.',
            error: false,
            closed: true
          }
        ],
        id: "Experience"
      },
      resumeSkills: {
        skills: [
          'Bootstrap',
          'Less',
          'Html',
          'Css',
          'JS'
        ],
        id: "Skills"
      }
    }
  },
  methods: {
    resumeHdrEdit (data, id) {
      EventBus.$emit('resume-hdr-edit', data, id);
    },
    resumeAboutEdit(data, id) {
      EventBus.$emit('resume-about-edit', data, id)
    },
    resumeEduEdit(data, id) {
      EventBus.$emit('resume-edu-edit', data, id)
    },
    resumeExpEdit(data, id) {
      EventBus.$emit('resume-exp-edit', data, id)
    },
    resumeSkillsEdit(data, id) {
      EventBus.$emit('resume-skills-edit', data, id)
    }
  },
  components: {Header, Sidebar}
}
</script>

<style lang="less">
.main-container {
  padding: 130px 0 50px;
  #resume {
    border: 1px #999 solid;
    border-radius: 2px;
    padding-bottom: 30px;
    .block {
      margin: 0;
      padding: 25px 3px;
      &:hover {
        border: 3px #296684 solid;
        box-sizing: border-box;
        padding: 22.77px 0.77px;
        cursor: pointer;
      }
      .block__hdr {
        margin-bottom: 20px;
        font-weight: bold;
      }
    }
    hr {
      margin: 5px 0;
      width: 70%;
      margin-left: 15%;
      border-color: #999;
    }
    .resume__hdr {
      color: #fff;
      text-align: left;
      background: #44a0ce;
      margin-bottom: 5px;
      span {
          font-size: 15px;
          font-weight: bold;
          margin-right: 20px;
        }
      #name {
        text-align: center;
        h3 {
          margin: 0;
          line-height: 90px;
          font-size: 40px;
        }
      }
      #adress {
        line-height: 30px;
        padding: 0;
        margin: 0;
        li {
          list-style: none;
        }
      }
    }
    .resume__exp {
      .resume__exp__places {
        li {
          list-style: none;
          margin: 15px 0;
          &:last-child {
            margin-bottom: 0;
          }
        }
      .exp__place {
        h3,h4,h5 {
          margin-top: 0;
        }
      }
      }
    }
    .resume__skills {
      .skills {
        padding: 0;
        margin: 0;
        .skill {
          list-style: none;
          text-align: center;
          margin: 10px 0;
          p {
            border: 1px #999 solid;
            display: inline-block;
            padding: 3px 15px;
            border-radius: 15px;
            background: rgba(0, 0, 0, .1);
            transition: .2s ease;
            &:hover {
              background: rgba(0, 0, 0, .2);
              cursor: pointer;
            }
          }
        }
      }
    }
    .resume__edu {
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          text-align: center;
        }
      }
    }
  }
}
</style>
