<template>
    <div>
        <header id="head">
            <div class="inner">
                <h1 id="logo">
                    <a href="javascript:;">Todo</a>
                </h1>
                <input type="textarea" placeholder="할 일을 검색 해보세요!">
                <div id="gnb">
                    <ul class="nav">
                        <li class="active"><a href="javascript:;">홈</a></li>
                        <li><a href="javascript:;">기록</a></li>
                        <li><a href="javascript:;">캘린더</a></li>
                    </ul>
                    <ul class="sign">
                        <li><a href="javascript:;">권노미님</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import ('../assets/css/style.css');
export default {
    name : "TodoHeader",
    components : {
    },
}
</script>

<style>

</style>