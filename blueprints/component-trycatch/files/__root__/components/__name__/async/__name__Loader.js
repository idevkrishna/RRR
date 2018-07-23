import hash from 'promise-hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    <%= pascalEntityName %>Container,
    <%= pascalEntityName %>,
  } = promisesBundles
  const promises = {
    <%= pascalEntityName %>Container,
    <%= pascalEntityName %>,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    <%= pascalEntityName %>,
  } = promisesBundles
  const promises = {
    <%= pascalEntityName %>,
  }
  return hash(promises)
}
