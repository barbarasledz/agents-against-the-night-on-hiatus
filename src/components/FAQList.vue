<template>
    <div>
        <div v-for="(pair, index) in QAndA" :key="index" class="q-a-container">
            <p class="question">{{pair.Q}}</p>
            <div class="answer" v-html="pair.A"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FAQList',
    data() {
        return {
            QAndA: [
                {
                    "Q": "Why make this character sheet tool?",
                    "A": `<p>While there is a character sheet included in the Night's Black Agents sourcebook and several digitally-fillable character sheets are available on Pelgrane Press's <a href="">Free Night’s Black Agents Downloads and Resources</a>, most of these tools do not update automatically to reflect points spent throughout the character creation process. (There is a version of the sheet that calculates the values for you, but it requires using Adobe Acrobat and is not the most intuitive in its use.) Since the game starts you off with as many as 70 general points and 20 (or more) investivative points, keeping track of these points manually can be difficult. </p>
                    <p>Other games like Dungeons and Dragons enjoy online systems like Roll20 for character creation, but there has been no pure web-based solution for Night's Black Agents... until now.</p>`
                }
            ]
        };
    }
}
</script>

<style>
.q-a-container {
    margin: 20px;
}
.q-a-container p {
    margin-bottom: 10px;
}
.question {
    font-size: 1.25rem;
    color: var(--red)
}

.answer {

}
</style>