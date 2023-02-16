const appList = [
    {
        class: 8,
        subjectsList: [
            {
                path: '/8-class/eng',
                title: 'Английский язык',
                topicsList: [
                    {
                        title: 'Module 5',
                        path: '/8-class/eng/module-5',
                        materialForPreparation: {
                            path: '/8-class/eng/module-5/material-for-preparation',
                            material: {
                                id: 'Eng8Module5'
                            }
                        },
                        
                        quiz: [
                            {
                                type: 'test',
                                title: 'The plane ... showed the passengers what to do in case of an emergency. ',
                                variants: ['team', 'staff', 'crew'],
                                correct: 2
                            },
        
                            {
                                type: 'test',
                                title: 'The terrible fire left dozens of buildings ... ruins.',
                                variants: ['on', 'in', 'by'],
                                correct: 1
                            },
        
                            {
                                type: 'test',
                                title: 'The football match was called ... because it was snowing.',
                                variants: ['out', 'off', 'for'],
                                correct: 1
                            },
        
                            {
                                type: 'test',
                                title: 'Cars and factories produce toxic ... that harm the environment.',
                                variants: ['fog', 'fumes', 'flames'],
                                correct: 1
                            },

                            {
                                type: 'test',
                                title: 'The ... rain caused the driver to lose control of his car and crash into a tree.',
                                variants: ['heavy', 'huge', 'massive'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'The lead actor felt under the ... and Daniel was asked to replace him in the school play.',
                                variants: ['clouds', 'climate', 'weather'],
                                correct: 2
                            },

                            {
                                type: 'test',
                                title: 'When you go to Paris, don‘t ... the chance to have your portrait painted in the Artist‘s Square.',
                                variants: ['miss', 'lose', 'leave'],
                                correct: 2
                            },

                            {
                                type: 'test',
                                title: 'The rain isn’t that bad; it’s only ...',
                                variants: ['drizzling', 'roaring', 'howling'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'Is there anyone in the garden or is it just the wind ... through the trees?',
                                variants: ['whistling', 'drizzling', 'pouring'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'The ... people were immediately taken to hospital.',
                                variants: ['injured', 'howled', 'avalanche'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'Food and clothes have been ... among the homeless.',
                                variants: ['distributed', 'scorching', 'buried'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'The panda is a(n) ... species.',
                                variants: ['occur', 'endangered', 'pull'],
                                correct: 1
                            },

                            {
                                type: 'user-input',
                                title: 'Mark has decided ... (join) an environmental organisation.',
                                correct: 'to join'
                            },

                            {
                                type: 'user-input',
                                title: 'People should ... (use) eco-friendly cleaning products, which are safer for the environment.',
                                correct: 'use'
                            },

                            {
                                type: 'user-input',
                                title: 'Neighbouring countries promised ... (send) supplies and rescue workers to the areas that were hit by the hurricane.',
                                correct: 'to send'
                            },

                            {
                                type: 'user-input',
                                title: 'Judy didn’t let her children ... (go) underwater diving.',
                                correct: 'go'
                            },

                            {
                                type: 'user-input',
                                title: 'Dan avoids ... (buy) anything that cannot be recycled later.',
                                correct: 'buying'
                            },

                            {
                                type: 'user-input',
                                title: 'I’ll never forget ... (take) part in a rescue mission for the first time.',
                                correct: 'taking'
                            },

                            {
                                type: 'user-input',
                                title: 'Peter was looking forward ... (start) his new job at the animal shelter.',
                                correct: 'to starting'
                            },

                            {
                                type: 'user-input',
                                title: 'Tina was proud ... (join) in the antiwar protest.',
                                correct: 'to join'
                            },

                            {
                                type: 'user-input',
                                title: 'They are tired of ... (live) in the dirty, noisy city, so they’ve decided to move to the countryside.',
                                correct: 'living'
                            },

                            {
                                type: 'user-input',
                                title: 'Sarah stopped ... (work) on this project a month ago.',
                                correct: 'working'
                            },

                            {
                                type: 'test',
                                title: 'The earthquake in Turkey calls ... immediate action.',
                                variants: ['on', 'in', 'for'],
                                correct: 2
                            },

                            {
                                type: 'test',
                                title: 'Ben called ... yesterday to see our new house.',
                                variants: ['out', 'on', 'for'],
                                correct: 1
                            },

                            {
                                type: 'test',
                                title: 'The police were called ... to investigate the disturbance.',
                                variants: ['in', 'out', 'into'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'Jane called ... Mrs Green to see if she needed any shopping.',
                                variants: ['on', 'in', 'for'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'There was an accident, but luckily, everybody is ... of danger.',
                                variants: ['out', 'into', 'for'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'When John saw his car burst ... flames he started screaming.',
                                variants: ['for', 'into', 'in'],
                                correct: 1
                            },

                            {
                                type: 'test',
                                title: 'Where ... earth are my wallet?',
                                variants: ['out', 'on', 'in'],
                                correct: 1
                            },

                            {
                                type: 'test',
                                title: 'What is that light ... the sky?',
                                variants: ['in', 'into', 'out'],
                                correct: 0
                            },

                            {
                                type: 'user-input',
                                title: 'A large part of the country’s budget is spent on ... (defend)',
                                correct: 'defence'
                            },

                            {
                                type: 'user-input',
                                title: 'This year’s World Kindness Concert will be full of terrific ... (perform)',
                                correct: 'performances'
                            },

                            {
                                type: 'user-input',
                                title: 'There is a ... (collect) once a week for recyclable items.',
                                correct: 'collection'
                            },

                            {
                                type: 'user-input',
                                title: 'The protestors made a big ... (disturb) outside the town hall.',
                                correct: 'disturbance'
                            }
                        ]
                    },
                ]
            }
        ]
    }
]

export default appList