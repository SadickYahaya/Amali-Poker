<template>
    <div>
        <div class="logo">
            <img src="../../assets/logo (1).png" alt="">
        </div>

        <div class="main">
            <div class="right">
                <div class="container">
                <div class="flex-container">
                    <div class="inner">Box 1</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 2</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 3</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 4</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 5</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 6</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 7</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 8</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 9</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 10</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 11</div>
                </div>
                <div class="flex-container">
                    <div class="inner">Box 12</div>
                </div>
        </div>
            </div>

            <div class="left">
                <div class="session">
                    <h1>Session Name</h1>
                </div>

                <div class="display">
                    <div class="head">
                        <h2>1 story created</h2>
                    </div>
                    <div class="content">
                        <div class="top">
                            <h3>Players: 6</h3>
                            <div class="invite">
                                <button>
                                    <img src="../../assets/Group 24.png" alt="">
                                </button>
                                <h3>invite</h3>
                            </div>
                        </div>
                        
                        <div class="players">
                            <ul>
                                <li>Zion</li>
                                <li>Olivia</li>
                                <li>Nii</li>
                                <li>Osborn</li>
                                <li>Albert</li>
                                <li>Joseph</li>
                            </ul>
                        </div>
                        
                        <div class="vote">
                            <button>
                                <h3>Vote</h3>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>


</template>


<script>


</script>



<style scoped>

.logo {
    width: Hug (40px);
    height: Hug (32px);
    margin-top: 41px;
    margin-left: 70px;
    gap: 4px;
}
.main {
    display: flex;
}
.container {
    width: 683px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    /* margin-left: 160px; 
     margin-top: 90px; */
    transform: translate(160px, 100px);
}
.left{
    transform: translate(150px);
}
.flex-container {
    width: 111px;
    height: 145px;
    background-color: rgba(193, 196, 214, 1);
    color: white;
    border-radius: 8px;
    border: 1px rgba(0, 0, 0, 1);
}
.inner {
    width: 85px;
    height: 112px;
    border: 1px solid rgba(0, 0, 0, 1);
    transform: translate(13px, 16.5px);
    text-align: center;
    line-height: 100px;
    font-size: x-large;
}
.session {
    width: 397px;
    text-align: center;
    transform: translate(240px, -20px);
}

h1 {
    line-height: 78px;
    font-size: 52px;
    font-weight: 700;
}

.display {
    width: 397px;
    height: 596px;
    /* margin-top: 72px; */
    /* margin-left: 250px; */
    border-radius: 8px;
    background-color: rgba(253, 245, 242, 1);
    /* margin-bottom: 114px; */
    transform: translate(250px, 20px)
;

}

h2 {
    justify-content: center;
    align-items: center;
}
.head {
    background-color: rgba(228, 122, 83, 1);
    color: white;
    width: 397px;
    height: 65px;
    top: 273px;
    left: 954px;
    border-radius: 8px;
}
.top {
    padding: 30px;
    display: flex;

}
.invite {
    display: flex;
    transform: translate(150px, -10px);
    gap: 5px;
}
.invite h3 {
    transform: translate(0, 5px);
}
.players {
    width: Hug (121px);
    height: Fixed (281px);
    transform: translate(80px);
    border-radius: 8px;

}
.players ul li {
    font-style: bold;
    font-size: x-large;
    margin-bottom: 24px;
}
.vote button {
    width: 127px;
    height: 40px;
    color: white;
    background-color: rgba(228, 122, 83, 1);
    border-radius: 8px;
    transform: translate(135px, 45px);
    padding: 8px 16px 8px 16px;
    text-align: center;
}

.vote button h3 {
    width: 95px;
    height: 24px;
    font-size: 32px;
    font-weight: bold;
    transform: translate(0, -8px);
}
.head h2 {
    padding: 20px;
    text-align: center;
}
/* hr {
    width: 267px;
    transform: translate(65px, 20px);
    background: rgba(216, 218, 229, 1);
} */
</style>

linear-gradient(0deg, #E47A53, #E47A53),
linear-gradient(247.96deg, #FFC700 -19.99%, #DD5928 110.31%, #EF9917 121.42%);
