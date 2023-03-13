export function logOCLEvaluationResult(object, resultadoEvaluacionObject) {

    console.log("Resultado de evaluacion objeto [" + object + "]");
    console.log("------------------------------------------------");
    console.log("Resultado: " + resultadoEvaluacionObject.result);

    if (!resultadoEvaluacionObject.result) {

        console.log(resultadoEvaluacionObject);
        resultadoEvaluacionObject.namesOfFailedInvs.forEach((failedInv) => {
          console.log("Invariante que ha fallado: " + failedInv);
        });

        resultadoEvaluacionObject.evaluatedContexts.forEach((evaluatedContext) => {
            console.log("Contexto evaluado: " + evaluatedContext.targetType);
        });
    }

    console.log("\n");
}