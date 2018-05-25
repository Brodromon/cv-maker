<template>
    <div v-if="id" id="sidebar-wrapper">
        <div class="sidebar-hdr">
            <h4>{{sidebarHdr}}</h4>
        </div>
        <ul class="resumeHdr" v-if="id=='Header'">
            <li><h5>Name: </h5><input v-model="toEdit.resumeHdr.person.fname" type="text"></li>
            <li><h5>Surname: </h5><input v-model="toEdit.resumeHdr.person.lname" type="text"></li>
            <li><h5>Number: </h5><input v-model="toEdit.resumeHdr.person.personData.number" type="text"></li>
            <li><h5>E-mail: </h5><input v-model="toEdit.resumeHdr.person.personData.email" type="email"></li>
            <li><h5>Adress: </h5><input v-model="toEdit.resumeHdr.person.personData.adress" type="text"></li>
        </ul>
        <ul class="resumeAbout" v-if="id=='About'">
            <textarea v-model="toEdit.resumeAbout.text"></textarea>
        </ul>
        <ul class="resumeEdu" v-if="id == 'Education'">
            <li v-for="(edu, i) in toEdit.resumeEdu.eduPlaces">
                <div class="closed" v-if="edu.closed == true">
                        <h5>{{ edu.placeName }}</h5>
                        <i @click="edu.closed = false">More...</i>
                </div>
                <div class="opened" v-if="edu.closed == false">
                    <h5>Name: </h5><input required v-model="edu.placeName" type="text">
                    <h5>Graduate: </h5><input required v-model="edu.graduate" type="text">
                    <h5>Country: </h5><input required v-model="edu.country" type="text">
                    <h5>City: </h5><input required v-model="edu.city" type="text">
                    <h5>Start date: </h5><input v-on:blur="checkIfEndIsLowerEdu(i);" required v-model="edu.startYear" type="date">
                    <h5>End date: </h5><input v-on:blur="checkIfEndIsLowerEdu(i);" required v-model="edu.endYear" type="date">
                    <h5 class="error" v-if="edu.error">Start date can not be later than end date!</h5>
                    <button @click="edu.closed = true" class="btn btn-save-place">Save</button>
                    <button @click="deleteEduPlace(i)" class="btn btn-delete-place">Delete</button>
                </div>
            </li>
            <button @click="addEduPlace()" class="btn add-place">+</button>
        </ul>
        <ul class="resumeExp exp-places" v-if="id=='Experience'">
                <li v-for="(place,i) in toEdit.resumeExp.expPlaces" class="exp-place">
                    <div class="closed" v-if="place.closed == true">
                        <h5>{{ place.position }}</h5>
                        <i @click="place.closed = false">More...</i>
                    </div>
                    <div class="opened" v-if="place.closed == false">
                            <span>{{ i+1 }}</span>
                            <h5>Position: </h5><input required v-model="place.position" type="text">
                            <h5>Company: </h5><input required v-model="place.compName" type="text">
                            <h5>Start date: </h5><input v-on:blur="checkIfEndIsLowerExp(i)" required v-model="place.startYear" type="date">
                            <h5>End date: </h5><input v-on:blur="checkIfEndIsLowerExp(i)" required v-model="place.endYear" type="date">
                            <h5 class="error" v-if="place.error">Start date can not be later than end date!</h5>

                            <textarea placeholder="Description" v-model="place.desc"></textarea>
                            <button @click="place.closed = true" class="btn btn-save-place">Save</button>
                            <button @click="deleteExpPlace(i)" class="btn btn-delete-place">Delete</button>
                    </div>
                </li>
            <button @click="addExpPlace()" class="btn add-place">+</button>
        </ul>
        <ul v-if="id=='Skills'">
            <li class="skill" v-for="(skill,i) in toEdit.resumeSkills.skills">
                <h5>{{skill}}</h5>
                <button @click="deleteSkill(i)" class="fas fa-times"></button>
            </li>
            <input v-on:keyup.enter="addSkill(toEdit.resumeSkills.addSkillName)" placeholder="Add skill..." type="text" v-model="toEdit.resumeSkills.addSkillName">
            <button @click="addSkill(toEdit.resumeSkills.addSkillName)" class="btn add-place">+</button>
        </ul>
    </div>
</template>

<script>
import { EventBus } from '../bus/index.js'

export default {
    data () {
        return {
            sidebarHdr: 'Edit',
            id: '',
            toEdit: {
                resumeHdr: {
                    person: {
                        fname: '',
                        lname: '',
                        personData: {
                            number: '',
                            email: '',
                            adress: ''
                        }
                    }
                },
                resumeAbout: {
                    text: '',
                },
                resumeEdu: {
                    eduPlaces: [
                        {
                            placeName: '',
                            graduate: '',
                            city: '',
                            country: '',
                            startYear: '',
                            endYear: '',
                            error: Boolean,
                            closed: Boolean
                        }
                    ]
                },
                resumeExp: {
                    expPlaces: [
                    {
                        position: '',
                        compName: '',
                        startYear: '',
                        endYear: '',
                        desc: '',
                        error: Boolean,
                        closed: Boolean
                    },
                    {
                        position: '',
                        compName: '',
                        startYear: '',
                        endYear: '',
                        desc: '',
                        error: Boolean,
                        closed: Boolean
                    }
                    ],
                },
                resumeSkills: {
                    skills: [
                    ],
                    addSkillName: ''
                }
        }
    }
  },
  methods: {
    checkIfEndIsLowerEdu(i) {
        if(this.toEdit.resumeEdu.eduPlaces[i].startYear >= this.toEdit.resumeEdu.eduPlaces[i].endYear) 
            this.toEdit.resumeEdu.eduPlaces[i].error = true
        else 
            this.toEdit.resumeEdu.eduPlaces[i].error = false
    },
    checkIfEndIsLowerExp(i) {
        if(this.toEdit.resumeExp.expPlaces[i].startYear >= this.toEdit.resumeExp.expPlaces[i].endYear) 
            this.toEdit.resumeExp.expPlaces[i].error = true
        else 
            this.toEdit.resumeExp.expPlaces[i].error = false
    },
    addExpPlace() {
        this.toEdit.resumeExp.expPlaces.push({position: 'qwe', compName: '',startYear: '', endYear: '', desc: '', error: false, closed: false})
    },
    addEduPlace() {
        this.toEdit.resumeEdu.eduPlaces.push({placeaName: '', graduate: '', city: '', country: '', startYear: '', endYear: '', error: false, closed: false})
    },
    addSkill(name) {
        this.toEdit.resumeSkills.skills.push(name);
        this.toEdit.resumeSkills.addSkillName = ''
    },
    deleteExpPlace(i) {
        this.toEdit.resumeExp.expPlaces.splice(i, 1);
    },
    deleteEduPlace(i) {
        this.toEdit.resumeEdu.eduPlaces.splice(i, 1);
    },
    deleteSkill(i) {
        this.toEdit.resumeSkills.skills.splice(i, 1);
    },
  },
  created() {
    EventBus.$on('resume-hdr-edit', (data, id) => {
        this.toEdit.resumeHdr.person = data;
        this.sidebarHdr = this.id = id
    })
    EventBus.$on('resume-about-edit', (data, id) => {
        this.toEdit.resumeAbout = data;
        this.sidebarHdr = this.id = id
    })
    EventBus.$on('resume-exp-edit', (data, id) => {
        this.toEdit.resumeExp.expPlaces = data;
        this.sidebarHdr = this.id = id
    })
    EventBus.$on('resume-edu-edit', (data, id) => {
        this.toEdit.resumeEdu.eduPlaces = data;
        this.sidebarHdr = this.id = id
    })
    EventBus.$on('resume-skills-edit', (data, id) => {
        this.toEdit.resumeSkills.skills = data;
        this.sidebarHdr = this.id = id
    })
  }
}
</script>

<style lang="less">
    #sidebar-wrapper {
        position: fixed;
        overflow-y: auto;
        left: -2px;
        top: 100px;
        max-height: 87vh;
        background: #fff;
        left: 0;
        border: 2px #e8e8e8 solid;
        border-radius: 0 5px 5px 0;
        padding: 10px;
        padding-top: 45px;
        z-index: 1;
        transition: .2s ease;
        .sidebar-hdr {
            position: absolute;
            top: -1px;
            left: 0;
            right: -1px;
            border-radius: 0 5px 0 0;
            background: #44a0ce;
            height: 35px;
            z-index: 3;
            h4 {
                font-weight: bold;
                color: #fff;
                text-align: center;
            }
        }
        ul {
            margin: 0;
            padding: 0;
            li {
                list-style: none;
            }
        }
        li {
            position: relative;
            border-bottom: 1px #e8e8e8 solid;
            padding: 7px 0;
            &:first-child {
                padding-top: 0;
            }
            &:last-child {
                border: none;
        }
        }
        h5 {
            display: inline-block;
            width: 33%;
            font-weight: bold;
        }
        h5.error {
            width: 100%;
            color: red;
        }
        input {
            width: 66%;
            display: inline-block;
            border: none;
            background: rgba(0, 0, 0, .04);
            border-radius: 3px;
            padding: 3px 5px;
            border: 2px #e8e8e8 solid;
        }
        .closed {
                    h5 {
                        width: 70%;
                        word-break: break-all;
                    }
                    i {
                    opacity: .35;
                    &:hover {
                        opacity: .5;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
        }
        .opened {
            padding-bottom: 50px;
        }
        .btn {
            position: absolute;
            bottom: 12px;
                background: #44a0ce;
                font-weight: bold;
                color: #fff;
                display: inline-block; 
            }
            .btn-save-place {
                left: 0;
            }
            .btn-delete-place {
                right: 3px;
                background: #f1f1f1;
                color: #888;
            }
            .add-place {
                position: relative;
                width: 100%;
                font-size: 30px;
                padding: 2px;
                }
        textarea {
            resize: none;
            width: 100%;
            height: 300px;
            border: none;
            background: rgba(0, 0, 0, .04);
            border-radius: 3px;
            padding: 3px 5px;
            border: 2px #e8e8e8 solid;

        }
        .resumeExp {
            li {
                position: relative;
                padding: 12px 0;           
                span {
                    position: absolute;
                    z-index: 1;
                    font-size: 150px;
                    opacity: .15;
                    font-family: 'Passion One', sans-serif;
                    width: 70px;
                    text-align: center;
                }
                h5,
                input {
                    margin: 7px 0 7px 0;
                }
                textarea {
                    height: 150px;
                }  
            }
        }
        .skill {
            &:first-child {
                padding-top: 7px;
            }
            position: relative;
            &:hover {
                .fas {
                    opacity: .4 ;
                }
            }
            .fas {
                background: transparent;
                border: none;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -7px;
                opacity: 0;
                &:hover {
                    color: red;
                    opacity: .7;
                }
            }
        }
    }

</style>
