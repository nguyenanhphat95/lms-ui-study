import flatten from 'lodash-es/flatten'

export const transformExamples = (examples) =>
  (examples || []).reduce(
    (acc, item) =>
      Object.assign(acc, {
        [item.type]: `${acc[item.type]} ${item.content}`,
      }),
    { code: '', markdown: '' },
  )

export const trasnformComponents = (components) => (components || [])
  .map((component) => ({
    name: component.props.displayName,
    content: component.props.examples,
    data: transformExamples(component.props.examples),
    link: `/#/${component.props.displayName}`,
  }))

export const createDocumentsFromSections = (docs = []) => flatten(
  docs
    .map((doc) => {
      return [
        {
          name: doc.name,
          content: doc.content,
          data: transformExamples(doc.content),
          link: `/#/${doc.visibleName}`,
        },
        ...trasnformComponents(doc.components),
      ]
    }),
)
