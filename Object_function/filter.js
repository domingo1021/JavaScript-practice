let subject_score = [
    {
        subject:"Chinese",
        score:100
    },{
        subject:"Math",
        score:80
    },{
        subject:"English",
        score:70
    }
]
// 篩選掉 Chinese
subject_score = subject_score.filter((key)=>key.subject!=="Chinese")
console.log(subject_score)