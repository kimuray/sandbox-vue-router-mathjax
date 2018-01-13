<!-- Formula2 -->
<template>
  <div id="formula2">
    $$
    \begin{eqnarray}
    \sum^n_{k=1}a_k = S_n = a_1 + a_2 + ....+a_n
    \end{eqnarray}
    $$
  </div>
</template>

<script>
  export default {
    mounted() {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    },
  }
</script>
