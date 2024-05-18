// const asyncHandler = (fn) => async (req,res,next) => {          //wrapper function using try-catch block
//   try {
//     await fn(req,res,next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success : false,
//       message : err.message
//     })
//   }
// }

//using Promise
const asyncHandler = (requestHandler) => {
   return (req,res,next) => {
    Promise.resolve(requestHandler(req ,res, next))
    .catch((err) => next(err))
  }
}

export {asyncHandler}