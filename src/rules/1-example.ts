import { defineRule } from "@monokle/plugin-toolkit";

/**
 * A basic example that checks if a resource has annotations
 */
export const noEmptyAnnotations = defineRule({
  id: 1,
  description: "Require Kubernetes annotations",
  help: "Add an annotation to the Kubernetes resource.",
  validate({ resources }, { report }) {
    resources.forEach((resource) => {
      const annotations = Object.entries(resource.metadata?.annotations ?? {});
      const hasAnnotations = annotations.length > 0;

      if (!hasAnnotations) {
        report(resource, { path: "metadata.annotations" });
      }
    });
  },
});
