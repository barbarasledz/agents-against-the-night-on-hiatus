<template>
    <div>
        Some questions and answers
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
                    "A": `<p>While there is a character sheet included in the Night's Black Agents sourcebook, as well as some digitally-fillable sheets available on Pelgrane Press's <a href="">Free Night’s Black Agents Downloads and Resources</a>, most of these tools do not update automatically to reflect points spent throughout the character creation process. Since the game starts you off with as many as 70 general points and 20 (or more) investivative points, keeping track of these points can be difficult manually. </p>
                    <p>There is a version of the sheet that calculates the values for you, but it requires using Adobe Acrobat and is not the most intuitive in its use. There are no pure web-based solutions similar to those enjoyed by other games, such as Dungeons and Dragons.</p>`
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